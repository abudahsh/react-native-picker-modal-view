import * as React from 'react';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { IModalInDtoProps, IModalListInDto, IModalInDtoState } from '../Interfaces';
export declare class ModalComponent extends React.PureComponent<IModalInDtoProps, IModalInDtoState> {
    private flatListRef;
    private numToRender;
    state: IModalInDtoState;
    static defaultProps: {
        showToTopButton: boolean;
        animationType: string;
        hideAlphabetFilter: boolean;
        placeholderTextColor: string;
        autoGenerateAlphabet: boolean;
        sortingLanguage: string;
        removeClippedSubviews: boolean;
        chooseText: string;
        searchText: string;
        autoCorrect: boolean;
        autoSort: boolean;
        list: any[];
        disabled: boolean;
        forceSelect: boolean;
    };
    constructor(props: IModalInDtoProps);
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: any, nextState: any): void;
    private _clearComponent;
    clearComponent(): void;
    componentWillMount(): void;
    private _openModal;
    openModal(): void;
    render(): JSX.Element;
    private _onViewableItemsChanged;
    private _onClose;
    onClose(): void;
    private _onBackRequest;
    onBackRequest(): void;
    private _scrollToUp;
    scrollToUp(): void;
    private _onScrolling;
    onScrolling(e: NativeSyntheticEvent<NativeScrollEvent>): void;
    private _renderItem;
    private renderItem;
    private _generateAlphabet;
    generateAlphabet(): void;
    private _keyExtractor;
    keyExtractor(item: IModalListInDto, index: number): string;
    private _setText;
    setText(text: string): void;
    private _trCompare;
    trCompare(a: any, b: any): number;
    private compare;
    private _getFilteredData;
    getFilteredData(): IModalListInDto[];
    private _onSelectMethod;
    onSelectMethod(key: IModalListInDto): IModalListInDto | void;
    private _getIndex;
    getIndex(alphabet: string): number;
    private _setAlphabet;
    setAlphabet(alphabet: string): void;
}
