import { motion } from "framer-motion";
import minhaFoto from "../assets.foto.jpg";

export default function About(){
    return(
        <section id="sobre"
        className="py-20 px-6 max-w-5x1 mx-auto flex flex-col md:flex-row items-center gap-10">
            <motion.div 
                className="flex-shrink"
                initial={{ opacity: 0, x: -30}}
                whileInView={{ opacity: 1, x: 0}}
                transition= {{ duration: 0.6}}       
            >
                <img 
                    src="{minhaFoto}" 
                    alt="Foto"
                    className="w-48 h48 md:w-64 md:h-64 object-cover rounded-full shado-lg border-4 border-orange-500"
                />
            </motion.div>

            {/* texto */}
            <motion.div
                className="text-center md:text-left" 
                initial={{ opacity: 0, x: 30}}
                whileInView= {{ opacity: 1, x: 0}}
                transition= {{duration: 0.6, delay:0.2}}
            >
                <h2 className="text-3 font-bold mb-6 text-orange-500">Sobre mim</h2>
                <p className="text-jutify text-lig-text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestias quae expedita iste consequatur aliquid explicabo omnis dolor ex accusamus quia aut maxime quod dolorem ipsum, rem reiciendis repellendus consectetur assumenda recusandae officiis a ullam. Sint rerum ea atque fuga dolores ullam reiciendis neque, illum unde at voluptas cupiditate veritatis sit nemo, voluptatibus, voluptate quis temporibus odit molestias amet inventore? Consectetur, molestias. Ullam illum eveniet itaque accusantium, quisquam, deserunt praesentium quas consequuntur architecto aliquam quo ex unde harum, soluta laborum repudiandae? Molestias molestiae doloremque nobis ducimus assumenda tenetur laudantium veniam expedita sed, impedit ad quaerat! Adipisci dolores officiis quam, aut optio similique tempore autem odit corrupti ducimus, modi fugit ad maxime vitae vero illo cum expedita quis, voluptates excepturi ab! Autem quam exercitationem aperiam nostrum totam a asperiores quod est voluptatum repudiandae? Maxime quod quas possimus voluptatem at sit facere incidunt nihil magni, sed dolorum molestias, exercitationem rerum libero fugiat ducimus voluptas corporis nulla ex voluptatibus unde ut, odit provident culpa! Explicabo, amet corrupti obcaecati alias fugit, magni aspernatur mollitia quaerat quia voluptas officia ducimus maiores sequi ratione iure ullam iste sunt illo atque quas. Consequatur fugiat omnis hic distinctio tenetur officia ab illum amet aperiam architecto, minima, voluptatum ducimus ea similique tempora ullam magni sit voluptate in quasi! Expedita illo recusandae totam autem blanditiis numquam, dicta odit quae consectetur corrupti quia, ab accusantium vitae suscipit perspiciatis repellat id est sapiente. Molestiae.
                </p>
            </motion.div>
        </section>
    );
}