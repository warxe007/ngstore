package ngstore

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured
import grails.plugin.springsecurity.userdetails.GrailsUser
import grails.plugin.springsecurity.SpringSecurityService
import ngstore.security.User
import org.apache.commons.logging.Log

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Secured(['IS_AUTHENTICATED_ANONYMOUSLY'])
@Transactional(readOnly = true)
class UserProfileController {

    SpringSecurityService springSecurityService

    /*static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]*/

    def index() {
        User user = springSecurityService.getCurrentUser()
        UserProfile profile = new UserProfile(
                firstName: user?.firstName,
                lastName: user?.lastName,
                roles: user?.authorities
        )

        JSON json = (profile instanceof JSON)? profile : profile as JSON

        profile = render json
        return [profile: profile]
    }

    /*def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond UserProfile.list(params), model:[userProfileCount: UserProfile.count()]
    }*/

    def show(UserProfile userProfile) {
        respond userProfile
    }

    @Transactional
    def save(UserProfile userProfile) {
        if (userProfile == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (userProfile.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond userProfile.errors, view:'create'
            return
        }

        userProfile.save flush:true

        respond userProfile, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(UserProfile userProfile) {
        if (userProfile == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (userProfile.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond userProfile.errors, view:'edit'
            return
        }

        userProfile.save flush:true

        respond userProfile, [status: OK, view:"show"]
    }

    @Transactional
    def delete(UserProfile userProfile) {

        if (userProfile == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        userProfile.delete flush:true

        render status: NO_CONTENT
    }
}
