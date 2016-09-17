package ngstore

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class MenuController extends BaseController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    @Secured(['IS_AUTHENTICATED_ANONYMOUSLY'])
    def index(Integer max) {
        executeSafelyForJSON("index()", 'Unable to fetch facturas', log) {
            List<Product> products =  Product.list(params)
            return [products: products]
        }
        /*params.max = Math.min(max ?: 10, 100)
        List<Product> products =  Product.list(params)

        JSON json = (products instanceof JSON)? products : products as JSON

        products = render json
        return [products: products]*/
    }
}
