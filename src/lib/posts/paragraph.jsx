import { StringToCode } from "../code/converter";
import { stringToUrl } from '../utils';

export const PostParagraph = ({ text, ...prop }, key) => {
    return(
        <p
            key={ key }
            id={ stringToUrl(text) }
            dangerouslySetInnerHTML={{ __html: StringToCode(text) }}
            className="mt-4 text-base text-foreground/70"
            { ...prop }>
        </p>
    )
}