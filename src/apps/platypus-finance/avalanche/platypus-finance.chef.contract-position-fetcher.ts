import { Inject } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { isMulticallUnderlyingError } from '~multicall/multicall.ethers';
import {
  GetMasterChefDataPropsParams,
  GetMasterChefTokenBalancesParams,
  MasterChefTemplateContractPositionFetcher,
} from '~position/template/master-chef.template.contract-position-fetcher';

import { PlatypusFinanceContractFactory, PlatypusFinanceMasterPlatypusV2 } from '../contracts';

@PositionTemplate()
export class AvalanchePlatypusFinanceChefContractPositionFetcher extends MasterChefTemplateContractPositionFetcher<PlatypusFinanceMasterPlatypusV2> {
  groupLabel = 'Farms';
  chefAddress = '0x68c5f4374228beedfa078e77b5ed93c28a2f713e';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(PlatypusFinanceContractFactory) protected readonly contractFactory: PlatypusFinanceContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string): PlatypusFinanceMasterPlatypusV2 {
    return this.contractFactory.platypusFinanceMasterPlatypusV2({ address, network: this.network });
  }

  async getPoolLength(contract: PlatypusFinanceMasterPlatypusV2) {
    return contract.poolLength();
  }

  async getStakedTokenAddress(contract: PlatypusFinanceMasterPlatypusV2, poolIndex: number): Promise<string> {
    return (await contract.poolInfo(poolIndex)).lpToken;
  }

  async getRewardTokenAddress(contract: PlatypusFinanceMasterPlatypusV2): Promise<string> {
    return contract.ptp();
  }

  async getTotalAllocPoints({ contract }: GetMasterChefDataPropsParams<PlatypusFinanceMasterPlatypusV2>) {
    return contract.totalAdjustedAllocPoint();
  }

  async getTotalRewardRate({ contract }: GetMasterChefDataPropsParams<PlatypusFinanceMasterPlatypusV2>) {
    return contract.ptpPerSec();
  }

  async getPoolAllocPoints({ contract, definition }: GetMasterChefDataPropsParams<PlatypusFinanceMasterPlatypusV2>) {
    return (await contract.poolInfo(definition.poolIndex)).adjustedAllocPoint;
  }

  async getStakedTokenBalance({
    address,
    contract,
    contractPosition,
  }: GetMasterChefTokenBalancesParams<PlatypusFinanceMasterPlatypusV2>) {
    return (await contract.userInfo(contractPosition.dataProps.poolIndex, address)).amount;
  }

  async getRewardTokenBalance({
    address,
    contract,
    contractPosition,
  }: GetMasterChefTokenBalancesParams<PlatypusFinanceMasterPlatypusV2>) {
    return contract
      .pendingTokens(contractPosition.dataProps.poolIndex, address)
      .then(v => v.pendingPtp)
      .catch(err => {
        if (isMulticallUnderlyingError(err)) return 0;
        throw err;
      });
  }
}
