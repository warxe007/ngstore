package ngstore

import grails.plugin.springsecurity.annotation.Secured

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class ProductController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    @Secured(['ROLE_SUPER_ADMIN'])
    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Product.list(params), model:[productCount: Product.count()]
    }

    @Secured(['ROLE_SUPER_ADMIN'])
    def show(Product product) {
        respond product
    }

    @Secured(['ROLE_SUPER_ADMIN'])
    @Transactional
    def save(Product product) {
        println product.productImage
        if (product == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (product.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond product.errors, view:'create'
            return
        }

        product.save flush:true

        respond product, [status: CREATED, view:"show"]
    }

    @Secured(['ROLE_SUPER_ADMIN'])
    @Transactional
    def update(Product product) {
        if (product == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (product.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond product.errors, view:'edit'
            return
        }

        product.save flush:true

        respond product, [status: OK, view:"show"]
    }

    @Secured(['ROLE_SUPER_ADMIN'])
    @Transactional
    def delete(Product product) {

        if (product == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        product.delete flush:true

        render status: NO_CONTENT
    }
}
