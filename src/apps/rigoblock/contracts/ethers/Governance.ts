/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export declare namespace IGovernanceVoting {
  export type ProposedActionStruct = {
    target: PromiseOrValue<string>;
    data: PromiseOrValue<BytesLike>;
    value: PromiseOrValue<BigNumberish>;
  };

  export type ProposedActionStructOutput = [string, string, BigNumber] & {
    target: string;
    data: string;
    value: BigNumber;
  };
}

export declare namespace IGovernanceState {
  export type ProposalStruct = {
    actionsLength: PromiseOrValue<BigNumberish>;
    startBlockOrTime: PromiseOrValue<BigNumberish>;
    endBlockOrTime: PromiseOrValue<BigNumberish>;
    votesFor: PromiseOrValue<BigNumberish>;
    votesAgainst: PromiseOrValue<BigNumberish>;
    votesAbstain: PromiseOrValue<BigNumberish>;
    executed: PromiseOrValue<boolean>;
  };

  export type ProposalStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
    actionsLength: BigNumber;
    startBlockOrTime: BigNumber;
    endBlockOrTime: BigNumber;
    votesFor: BigNumber;
    votesAgainst: BigNumber;
    votesAbstain: BigNumber;
    executed: boolean;
  };

  export type ProposalWrapperStruct = {
    proposal: IGovernanceState.ProposalStruct;
    proposedAction: IGovernanceVoting.ProposedActionStruct[];
  };

  export type ProposalWrapperStructOutput = [
    IGovernanceState.ProposalStructOutput,
    IGovernanceVoting.ProposedActionStructOutput[],
  ] & {
    proposal: IGovernanceState.ProposalStructOutput;
    proposedAction: IGovernanceVoting.ProposedActionStructOutput[];
  };

  export type ReceiptStruct = {
    hasVoted: PromiseOrValue<boolean>;
    votes: PromiseOrValue<BigNumberish>;
    voteType: PromiseOrValue<BigNumberish>;
  };

  export type ReceiptStructOutput = [boolean, BigNumber, number] & {
    hasVoted: boolean;
    votes: BigNumber;
    voteType: number;
  };

  export type GovernanceParametersStruct = {
    strategy: PromiseOrValue<string>;
    proposalThreshold: PromiseOrValue<BigNumberish>;
    quorumThreshold: PromiseOrValue<BigNumberish>;
    timeType: PromiseOrValue<BigNumberish>;
  };

  export type GovernanceParametersStructOutput = [string, BigNumber, BigNumber, number] & {
    strategy: string;
    proposalThreshold: BigNumber;
    quorumThreshold: BigNumber;
    timeType: number;
  };

  export type EnhancedParamsStruct = {
    params: IGovernanceState.GovernanceParametersStruct;
    name: PromiseOrValue<string>;
    version: PromiseOrValue<string>;
  };

  export type EnhancedParamsStructOutput = [IGovernanceState.GovernanceParametersStructOutput, string, string] & {
    params: IGovernanceState.GovernanceParametersStructOutput;
    name: string;
    version: string;
  };
}

export interface GovernanceInterface extends utils.Interface {
  functions: {
    'castVote(uint256,uint8)': FunctionFragment;
    'castVoteBySignature(uint256,uint8,uint8,bytes32,bytes32)': FunctionFragment;
    'execute(uint256)': FunctionFragment;
    'getActions(uint256)': FunctionFragment;
    'getProposalById(uint256)': FunctionFragment;
    'getProposalState(uint256)': FunctionFragment;
    'getReceipt(uint256,address)': FunctionFragment;
    'getVotingPower(address)': FunctionFragment;
    'governanceParameters()': FunctionFragment;
    'initializeGovernance()': FunctionFragment;
    'name()': FunctionFragment;
    'proposalCount()': FunctionFragment;
    'proposals()': FunctionFragment;
    'propose((address,bytes,uint256)[],string)': FunctionFragment;
    'updateThresholds(uint256,uint256)': FunctionFragment;
    'upgradeImplementation(address)': FunctionFragment;
    'upgradeStrategy(address)': FunctionFragment;
    'votingPeriod()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'castVote'
      | 'castVoteBySignature'
      | 'execute'
      | 'getActions'
      | 'getProposalById'
      | 'getProposalState'
      | 'getReceipt'
      | 'getVotingPower'
      | 'governanceParameters'
      | 'initializeGovernance'
      | 'name'
      | 'proposalCount'
      | 'proposals'
      | 'propose'
      | 'updateThresholds'
      | 'upgradeImplementation'
      | 'upgradeStrategy'
      | 'votingPeriod',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'castVote',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'castVoteBySignature',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'execute', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'getActions', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'getProposalById', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'getProposalState', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'getReceipt',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'getVotingPower', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'governanceParameters', values?: undefined): string;
  encodeFunctionData(functionFragment: 'initializeGovernance', values?: undefined): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proposalCount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proposals', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'propose',
    values: [IGovernanceVoting.ProposedActionStruct[], PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'updateThresholds',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'upgradeImplementation', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'upgradeStrategy', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'votingPeriod', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'castVote', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'castVoteBySignature', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'execute', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getActions', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getProposalById', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getProposalState', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getReceipt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getVotingPower', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'governanceParameters', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initializeGovernance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proposalCount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proposals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'propose', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateThresholds', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeImplementation', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeStrategy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'votingPeriod', data: BytesLike): Result;

  events: {
    'ProposalCreated(address,uint256,tuple[],uint256,uint256,string)': EventFragment;
    'ProposalExecuted(uint256)': EventFragment;
    'StrategyUpgraded(address)': EventFragment;
    'ThresholdsUpdated(uint256,uint256)': EventFragment;
    'Upgraded(address)': EventFragment;
    'VoteCast(address,uint256,uint8,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'ProposalCreated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ProposalExecuted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'StrategyUpgraded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ThresholdsUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Upgraded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'VoteCast'): EventFragment;
}

export interface ProposalCreatedEventObject {
  proposer: string;
  proposalId: BigNumber;
  actions: IGovernanceVoting.ProposedActionStructOutput[];
  startBlockOrTime: BigNumber;
  endBlockOrTime: BigNumber;
  description: string;
}
export type ProposalCreatedEvent = TypedEvent<
  [string, BigNumber, IGovernanceVoting.ProposedActionStructOutput[], BigNumber, BigNumber, string],
  ProposalCreatedEventObject
>;

export type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;

export interface ProposalExecutedEventObject {
  proposalId: BigNumber;
}
export type ProposalExecutedEvent = TypedEvent<[BigNumber], ProposalExecutedEventObject>;

export type ProposalExecutedEventFilter = TypedEventFilter<ProposalExecutedEvent>;

export interface StrategyUpgradedEventObject {
  newStrategy: string;
}
export type StrategyUpgradedEvent = TypedEvent<[string], StrategyUpgradedEventObject>;

export type StrategyUpgradedEventFilter = TypedEventFilter<StrategyUpgradedEvent>;

export interface ThresholdsUpdatedEventObject {
  proposalThreshold: BigNumber;
  quorumThreshold: BigNumber;
}
export type ThresholdsUpdatedEvent = TypedEvent<[BigNumber, BigNumber], ThresholdsUpdatedEventObject>;

export type ThresholdsUpdatedEventFilter = TypedEventFilter<ThresholdsUpdatedEvent>;

export interface UpgradedEventObject {
  newImplementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface VoteCastEventObject {
  voter: string;
  proposalId: BigNumber;
  voteType: number;
  votingPower: BigNumber;
}
export type VoteCastEvent = TypedEvent<[string, BigNumber, number, BigNumber], VoteCastEventObject>;

export type VoteCastEventFilter = TypedEventFilter<VoteCastEvent>;

export interface Governance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GovernanceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    castVote(
      proposalId: PromiseOrValue<BigNumberish>,
      voteType: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    castVoteBySignature(
      proposalId: PromiseOrValue<BigNumberish>,
      voteType: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    execute(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getActions(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [IGovernanceVoting.ProposedActionStructOutput[]] & {
        proposedActions: IGovernanceVoting.ProposedActionStructOutput[];
      }
    >;

    getProposalById(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [IGovernanceState.ProposalWrapperStructOutput] & {
        proposalWrapper: IGovernanceState.ProposalWrapperStructOutput;
      }
    >;

    getProposalState(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;

    getReceipt(
      proposalId: PromiseOrValue<BigNumberish>,
      voter: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[IGovernanceState.ReceiptStructOutput]>;

    getVotingPower(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    governanceParameters(overrides?: CallOverrides): Promise<[IGovernanceState.EnhancedParamsStructOutput]>;

    initializeGovernance(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    proposalCount(overrides?: CallOverrides): Promise<[BigNumber] & { count: BigNumber }>;

    proposals(overrides?: CallOverrides): Promise<
      [IGovernanceState.ProposalWrapperStructOutput[]] & {
        proposalWrapper: IGovernanceState.ProposalWrapperStructOutput[];
      }
    >;

    propose(
      actions: IGovernanceVoting.ProposedActionStruct[],
      description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updateThresholds(
      newProposalThreshold: PromiseOrValue<BigNumberish>,
      newQuorumThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    upgradeImplementation(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    upgradeStrategy(
      newStrategy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    votingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  castVote(
    proposalId: PromiseOrValue<BigNumberish>,
    voteType: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  castVoteBySignature(
    proposalId: PromiseOrValue<BigNumberish>,
    voteType: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  execute(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getActions(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<IGovernanceVoting.ProposedActionStructOutput[]>;

  getProposalById(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<IGovernanceState.ProposalWrapperStructOutput>;

  getProposalState(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;

  getReceipt(
    proposalId: PromiseOrValue<BigNumberish>,
    voter: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<IGovernanceState.ReceiptStructOutput>;

  getVotingPower(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  governanceParameters(overrides?: CallOverrides): Promise<IGovernanceState.EnhancedParamsStructOutput>;

  initializeGovernance(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

  proposals(overrides?: CallOverrides): Promise<IGovernanceState.ProposalWrapperStructOutput[]>;

  propose(
    actions: IGovernanceVoting.ProposedActionStruct[],
    description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updateThresholds(
    newProposalThreshold: PromiseOrValue<BigNumberish>,
    newQuorumThreshold: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  upgradeImplementation(
    newImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  upgradeStrategy(
    newStrategy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    castVote(
      proposalId: PromiseOrValue<BigNumberish>,
      voteType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    castVoteBySignature(
      proposalId: PromiseOrValue<BigNumberish>,
      voteType: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    execute(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    getActions(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<IGovernanceVoting.ProposedActionStructOutput[]>;

    getProposalById(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<IGovernanceState.ProposalWrapperStructOutput>;

    getProposalState(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;

    getReceipt(
      proposalId: PromiseOrValue<BigNumberish>,
      voter: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<IGovernanceState.ReceiptStructOutput>;

    getVotingPower(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    governanceParameters(overrides?: CallOverrides): Promise<IGovernanceState.EnhancedParamsStructOutput>;

    initializeGovernance(overrides?: CallOverrides): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(overrides?: CallOverrides): Promise<IGovernanceState.ProposalWrapperStructOutput[]>;

    propose(
      actions: IGovernanceVoting.ProposedActionStruct[],
      description: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    updateThresholds(
      newProposalThreshold: PromiseOrValue<BigNumberish>,
      newQuorumThreshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    upgradeImplementation(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    upgradeStrategy(newStrategy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'ProposalCreated(address,uint256,tuple[],uint256,uint256,string)'(
      proposer?: null,
      proposalId?: null,
      actions?: null,
      startBlockOrTime?: null,
      endBlockOrTime?: null,
      description?: null,
    ): ProposalCreatedEventFilter;
    ProposalCreated(
      proposer?: null,
      proposalId?: null,
      actions?: null,
      startBlockOrTime?: null,
      endBlockOrTime?: null,
      description?: null,
    ): ProposalCreatedEventFilter;

    'ProposalExecuted(uint256)'(proposalId?: null): ProposalExecutedEventFilter;
    ProposalExecuted(proposalId?: null): ProposalExecutedEventFilter;

    'StrategyUpgraded(address)'(newStrategy?: null): StrategyUpgradedEventFilter;
    StrategyUpgraded(newStrategy?: null): StrategyUpgradedEventFilter;

    'ThresholdsUpdated(uint256,uint256)'(
      proposalThreshold?: null,
      quorumThreshold?: null,
    ): ThresholdsUpdatedEventFilter;
    ThresholdsUpdated(proposalThreshold?: null, quorumThreshold?: null): ThresholdsUpdatedEventFilter;

    'Upgraded(address)'(newImplementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
    Upgraded(newImplementation?: PromiseOrValue<string> | null): UpgradedEventFilter;

    'VoteCast(address,uint256,uint8,uint256)'(
      voter?: null,
      proposalId?: null,
      voteType?: null,
      votingPower?: null,
    ): VoteCastEventFilter;
    VoteCast(voter?: null, proposalId?: null, voteType?: null, votingPower?: null): VoteCastEventFilter;
  };

  estimateGas: {
    castVote(
      proposalId: PromiseOrValue<BigNumberish>,
      voteType: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    castVoteBySignature(
      proposalId: PromiseOrValue<BigNumberish>,
      voteType: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    execute(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getActions(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    getProposalById(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    getProposalState(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    getReceipt(
      proposalId: PromiseOrValue<BigNumberish>,
      voter: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getVotingPower(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    governanceParameters(overrides?: CallOverrides): Promise<BigNumber>;

    initializeGovernance(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(overrides?: CallOverrides): Promise<BigNumber>;

    propose(
      actions: IGovernanceVoting.ProposedActionStruct[],
      description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updateThresholds(
      newProposalThreshold: PromiseOrValue<BigNumberish>,
      newQuorumThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    upgradeImplementation(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    upgradeStrategy(
      newStrategy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    castVote(
      proposalId: PromiseOrValue<BigNumberish>,
      voteType: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    castVoteBySignature(
      proposalId: PromiseOrValue<BigNumberish>,
      voteType: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    execute(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getActions(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProposalById(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProposalState(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getReceipt(
      proposalId: PromiseOrValue<BigNumberish>,
      voter: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getVotingPower(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governanceParameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initializeGovernance(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    propose(
      actions: IGovernanceVoting.ProposedActionStruct[],
      description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updateThresholds(
      newProposalThreshold: PromiseOrValue<BigNumberish>,
      newQuorumThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    upgradeImplementation(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    upgradeStrategy(
      newStrategy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
