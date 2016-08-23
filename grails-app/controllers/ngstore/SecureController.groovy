package ngstore


import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured

class SecureController {

    @Secured('ROLE_SUPER_ADMIN')
    def index() {
        render 'Secure access only'
    }
}
