import { Inject } from '@nestjs/common';
import Axios from 'axios';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { Erc20 } from '~contract/contracts';
import { MetaType } from '~position/position.interface';
import { ContractPositionTemplatePositionFetcher } from '~position/template/contract-position.template.position-fetcher';
import {
  DefaultContractPositionDefinition,
  GetTokenBalancesParams,
} from '~position/template/contract-position.template.types';

import { PolynomialAccountResolver } from '../common/polynomial.account-resolver';

export type PolynomialSmartWalletDataProp = {
  liquidity: number;
};

@PositionTemplate()
export class OptimismPolynomialSmartWalletContractPositionFetcher extends ContractPositionTemplatePositionFetcher<Erc20> {
  sUSD = '0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9';
  groupLabel = 'Smart Wallet';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(PolynomialAccountResolver) protected readonly polynomialAccountResolver: PolynomialAccountResolver,
  ) {
    super(appToolkit);
  }

  getContract(): Erc20 {
    return this.appToolkit.globalContracts.erc20({ address: this.sUSD, network: this.network });
  }

  async getDefinitions(): Promise<DefaultContractPositionDefinition[]> {
    return [{ address: this.sUSD }];
  }

  async getLabel(): Promise<string> {
    return 'Smart Wallet Balance';
  }

  async getTokenDefinitions() {
    return [
      {
        address: this.sUSD,
        metaType: MetaType.SUPPLIED,
        network: this.network,
      },
    ];
  }

  async getAccountAddress(address: string): Promise<string> {
    return this.polynomialAccountResolver.getSmartWalletAddress(address);
  }

  async getTokenBalancesPerPosition({ address, contract }: GetTokenBalancesParams<Erc20>) {
    return [await contract.balanceOf(address)];
  }

  async getDataProps(): Promise<PolynomialSmartWalletDataProp> {
    const { data } = await Axios.get<{ tvl: number }>('https://perps-api-experimental.polynomial.fi/snx-perps/tvl');
    return {
      liquidity: data.tvl,
    };
  }
}
