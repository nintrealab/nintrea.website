import { RawToData, StringToCode } from '../code/converter';
import { cn } from '@/lib/utils';

export const PostTable = ({ text, ...prop }, key) => {
    const { body, header } = RawToData({ rawData: text || prop?.rawData })
    return (
        <div key={key} className="overflow-hidden overflow-x-auto mb-7 ring-1 drop-shadow-sm ring-primary/20 sm:rounded-lg">
            <table className="min-w-full divide-y bg-background divide-primary/10">
                <thead className="bg-primary/10">
                    <tr>
                        {header.map((header, key) => (
                            <th
                                scope="col"
                                key={key}
                                className={cn(
                                    key === 0 && 'pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6',
                                    'px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                )}>
                                {header.column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y bg-background divide-foreground/5">
                    {body.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, cellIndex) => {
                                return (
                                    <td key={cellIndex} className={
                                        cn(
                                            cellIndex === 0 && 'whitespace-nowrap pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6',
                                            'px-3 py-3 text-sm text-gray-500 whitespace-nowrap'
                                        )
                                    } dangerouslySetInnerHTML={{ __html: StringToCode(value) }} >
                                        {/* {value} */}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}