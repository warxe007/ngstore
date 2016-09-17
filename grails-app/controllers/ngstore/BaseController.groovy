/**
 * Created by Aaron on 17/09/2016.
 */
package ngstore

import grails.converters.JSON
import org.apache.commons.logging.Log

abstract class BaseController {

    protected def executeSafelyForJSON(String method, String errorMessage, Log logger, Closure closure) {
        executeSafely(method, errorMessage, logger) {
            def result = closure.call()

            if(result == null) {
                throw new RuntimeException("No data found.")
            }

            result = render ([result: result] as JSON)

            return result
        }
    }

    protected def executeSafely(String method, String errorMessage, Log logger, Closure closure) {
        try {
            def result = closure.call()
            logger.info("$method 'Success'}")
            return result
        } catch (e) {
            logger.error("$method : $errorMessage with ${params}", e)
            response.status = 500
            render ([errorMessage: e.message, errorCode: new Date().getTime()] as JSON)
        }
    }
}
