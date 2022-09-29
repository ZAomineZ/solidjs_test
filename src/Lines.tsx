import {Component} from "solid-js";
import {Hand} from "./Hand";

type LinesProps = {
    numberOfLines: number
    class: string
    length: number
    width: number
}

const rotate = (index: number, length: number) => () => `rotate(${(360 * index) / length})`

export const Lines: Component<LinesProps> = ({numberOfLines, ...rest}) => {
    return Array.from({length: numberOfLines}).map((_, index) => <Hand rotate={rotate(index, numberOfLines)} {...rest}
                                                                       fixed/>)
}