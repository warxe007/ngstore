package ngstore

import ngstore.security.Role;

class UserProfile {
    String firstName
    String lastName
    Set<Role> roles

    static constraints = {
    }
}
