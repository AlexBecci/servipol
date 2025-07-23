import { useEffect, useState } from "react"
import { RedirectModule } from "../hoook/RedirectModule";
import { ContainerModule } from "../shared/ContainerModules";
import { ContainerPage } from "../shared/ContainerPage";
import { WhatsAppButton } from "../shared/WhatsappButton";

export const PageMain = () => {
    const [loading, setLoading] = useState<boolean>(true);



    return (
        <ContainerPage >
            {loading && (
                <RedirectModule setLoading={setLoading} />
            )}
            <WhatsAppButton phoneNumber="1124555"/>
            <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repudiandae architecto culpa deleniti saepe esse. Earum eligendi perspiciatis totam ex molestiae molestias nemo placeat amet quaerat eaque? Libero, nam consequuntur.
                Vero ad esse quas quos necessitatibus aut. Eaque fugiat recusandae numquam in ducimus optio totam, natus reiciendis molestias quisquam facere, quod repellendus architecto earum maiores eveniet officiis distinctio. Ratione, eaque!
                Fugit quidem unde vitae eum pariatur amet velit laboriosam. Ea accusantium fugit ipsum voluptatibus totam officiis, in voluptatem quasi, corporis nobis nulla natus, explicabo sint consectetur quas. Fugit, recusandae consequatur.
                Assumenda deserunt necessitatibus illum beatae temporibus nulla sequi repellendus eaque. Velit dolores facere unde quos doloremque, commodi est ipsam laborum alias molestias similique eius assumenda maiores incidunt corporis. Quasi, nam.
                Eius laborum, nobis, architecto, reprehenderit sapiente in fuga aliquid fugiat harum odio cum ipsum beatae neque. Quas ut commodi dolorem veniam saepe aperiam maxime harum, dolore unde eos est sed!</>
        </ContainerPage>
    )
}