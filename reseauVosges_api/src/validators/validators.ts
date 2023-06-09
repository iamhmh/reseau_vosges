import Joi from "joi";

export const validators: any = {
    user: () => 
        Joi.object({
            role: Joi.string().valid("super_admin", "bureau_admin", "membre", "user").required(),
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            username: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
            confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
            phone_number: Joi.string().required(),
            address: Joi.string().required(),
            city: Joi.string().required(),
            zip_code: Joi.number().required(),
            compagny_name: Joi.string().required(),
            compagny_domain: Joi.string().required(),
            website_url: Joi.string().required(),
            business_description: Joi.string().required(),
            business_activity: Joi.string().required(),
            avatar: Joi.string().required(),
            compagny_logo: Joi.string().required(),
            isUserVerified: Joi.boolean().optional(),
        }),
    userUpdate: () =>
        Joi.object({
            id: Joi.string().required(),
            role: Joi.string().empty(""),
            firstname: Joi.string().empty(""),
            lastname: Joi.string().empty(""),
            username: Joi.string().empty(""),
            email: Joi.string().email().empty(""),
            password: Joi.string().min(8).empty(""),
            confirmPassword: Joi.string().valid(Joi.ref("password")).empty(""),
            phone_number: Joi.string().empty(""),
            address: Joi.string().empty(""),
            city: Joi.string().empty(""),
            zip_code: Joi.number().empty(""),
            compagny_name: Joi.string().empty(""),
            compagny_domain: Joi.string().empty(""),
            website_url: Joi.string().empty(""),
            business_description: Joi.string().empty(""),
            business_activity: Joi.string().empty(""),
            avatar: Joi.string().empty(""),
            compagny_logo: Joi.string().empty(""),
            isUserVerified: Joi.boolean().optional(),
        }),
    login: () =>
        Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
            userData: Joi.object().optional(),
            isUserVerified: Joi.boolean().optional(),
        }),
    visitor: () =>
        Joi.object({
            civility: Joi.string().valid("Mlle", "Mme", "M.", "Prof", "Dr").required(),
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            email: Joi.string().email().required(),
            phone_number: Joi.number().required(),
            address_1: Joi.string().required(),
            address_2: Joi.string().required(),
            city: Joi.string().required(),
            zip_code: Joi.number().required(),
            compagny_name: Joi.string().required(),
            date_of_visit: Joi.date().required(),
            profession: Joi.string().required(),
            visitor_type: Joi.string().valid("Visiteur", "Directeur", "Suppléant").required(),
            reunion_date: Joi.date().required(),
            isUserVerified: Joi.boolean().optional(),
        }),
    absence_management: () =>
        Joi.object({
            date: Joi.date().required(),
            absence_type: Joi.string().valid("absence", "visiteur").required(),
            reason: Joi.string().required(),
            user_id: Joi.string().required(),
            isUserVerified: Joi.boolean().optional(),
        }),
    conference: () =>
        Joi.object({
            date: Joi.date().required(),
            theme: Joi.string().required(),
            user_id: Joi.string().required(),
            isUserVerified: Joi.boolean().optional(),
        }),
    group: () =>
        Joi.object({
            name: Joi.string().required(),
            address: Joi.string().required(),
            city: Joi.string().required(),
            zip_code: Joi.number().required(),
            user_id: Joi.string().required(),
            isUserVerified: Joi.boolean().optional(),
        }),
    mpb: () =>
        Joi.object({
            amount: Joi.number().required(),
            business_activity: Joi.string().valid("Nouveau", "Récurrent").required(),
            recommendation_type: Joi.string().valid("Interne", "Externe", "Essaimage").required(),
            commentary: Joi.string().required(),
            user_id: Joi.string().required(),
            isUserVerified: Joi.boolean().optional(),
        }),
    private_talk: () =>
        Joi.object({
            initiated_by: Joi.string().valid("user_id", "Moi-même").required(),
            meeting_place: Joi.string().required(),
            date: Joi.date().required(),
            conversation_subject: Joi.string().required(),
            user_id: Joi.string().required(),
            isUserVerified: Joi.boolean().optional(),
        }),
    payment_history: () =>
        Joi.object({
            amount: Joi.number().required(),
            date: Joi.date().required(),
            payment_type: Joi.string().valid("CB", "Virement").required(),
            user_id: Joi.string().required(),
            isUserVerified: Joi.boolean().optional(),
        }),
    subscription: () =>
        Joi.object({
            subscription_type: Joi.string().valid("Annuel", "Mensuel").required(),
            subscription_start_date: Joi.date().required(),
            subscription_end_date: Joi.date().required(),
            user_id: Joi.string().required(),
            isUserVerified: Joi.boolean().optional(),
        }),
    recommendations: () =>
        Joi.object({
            recommendation_type: Joi.string().valid("Interne", "Externe").required(),
            status: Joi.boolean().required(),
            recommendation: Joi.string().required(),
            phone_number: Joi.number().required(),
            email: Joi.string().email().required(),
            address: Joi.string().required(),
            commentary: Joi.string().required(),
            rating: Joi.string().valid("1", "2", "3", "4", "5").required(),
            user_id: Joi.string().required(),
            isUserVerified: Joi.boolean().optional(),
        }),
}