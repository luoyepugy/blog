export interface IFormat {
    /**
     * 将日期格式化为字符串
     *
     * @param date 指定日期
     * @param month 指定当前日期上个月-1/下个月+1
     * @param division 日期分隔符，默认为'-'
     * @returns eg:'2020-10-02'
     */
    dateToString(date?: Date, month?: number, division?: string): string;
    /**
     * 时间戳转日期时间
     *
     * @param timestamp 时间戳
     * @param division 日期分隔符，默认为'-'
     * @returns {String} eg: '2020-10-02 12:00:00'
     */
    timestampToDateTime(timestamp: number): string;
    /**
     * 时间戳转日期
     *
     * @param timestamp 时间戳
     * @param division 日期分隔符，默认为'-'
     * @returns {String} eg: '2020-10-02'
     */
    timestampToDate(timestamp: number, division?: string): string;
    /**
     * 时间戳转时分秒
     *
     * @param timestamp 时间戳
     * @returns {String} eg: '12:00:00'
     */
    timestampToTime(timestamp: number): string;
}
declare class Format implements IFormat {
    private formatZero;
    /**
     * 将日期格式化为字符串
     *
     * @param date 指定日期
     * @param month 指定当前日期上个月-1/下个月+1
     * @param division 日期分隔符
     * @returns eg:'2020-10-02'
     */
    dateToString(date?: Date, month?: number, division?: string): string;
    /**
     * 时间戳转日期时间
     *
     * @param timestamp 时间戳
     * @param division 日期分隔符
     * @returns {String} eg: '2020-10-02 12:00:00'
     */
    timestampToDateTime(timestamp: number, division?: string): string;
    /**
     * 时间戳转日期
     *
     * @param timestamp 时间戳
     * @param division 日期分隔符，默认为'-'
     * @returns {String} eg: '2020-10-02'
     */
    timestampToDate(timestamp: number, division?: string): string;
    /**
     * 时间戳转时分秒
     *
     * @param timestamp 时间戳
     * @returns {String} eg: '12:00:00'
     */
    timestampToTime(timestamp: number): string;
}
declare const format: Format;
export default format;
