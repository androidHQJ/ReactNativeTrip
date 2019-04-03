/**
 * 字符串相关工具类
 */
class StringUtil {

    isNotEmpty(text) {
        return (text !== undefined && text != null && text !== "");
    }
}

export default new StringUtil();