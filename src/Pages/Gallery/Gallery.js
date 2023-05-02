import React from 'react'
import style from './Gallery.module.css'
export default function Gallery(){
    return(
        <section className={style.GallerySection}>
        <div className={style.container}>
        <div className={style.sectionTitle}>Gallery</div>
        <div className={style.galleryContainer}>
        <div className={style.item}>
        <span className={style.title}>Image Title</span>
        <img  src='https://previews.agefotostock.com/previewimage/medibigoff/1b722336ef7a12aa604471208b155282/uig-928-09-d6-02149v10pd.jpg/wp-content/uploads/2023/03/DBSI.jpg' alt='image'/>
        </div>

        <div className={style.item}>
        <span className={style.title}>Image Title</span>
        <img  src='https://img.bollycurry.com/wallpapers/800x600/295635-shahid-kapoor-with-the-ngo-kids.jpg' alt='image'/>
        </div>
        
        <div className={style.item}>
        <span className={style.title}>Image Title</span>https://media.istoc
        <img  src='https://www.planindia.org/wp-content/uploads/2023/03/DBSI.jpg' alt='image'/>
        </div>

        <div className={style.item}>
        <span className={style.title}>Image Title</span>
        <img  src='https://akm-img-a-in.tosshub.com/lingo/gnt/images/story/202303/assam_tapoban_ngo_children-sixteen_nine.jpg?size=948:533' alt='image'/>
        </div>

        <div className={style.item}>
        <span className={style.title}>Image Title</span>
        <img  src='https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_350/post_16801908/full.jpg' alt=''/>
        </div>
        <div className={style.item}>
        <span className={style.title}>Image Title</span>
        <img  src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/children_pti_1200x768_1200x768.jpeg?size=690:388' alt=''/>
        </div>

        <div className={style.item}>
        <span className={style.title}>Image Title</span>
        <img  src='https://previews.agefotostock.com/previewimage/medibigoff/
        22fc84c8d43b6ab9e17a3d790af9e041/dpa-asb-160505.jpg' alt=''/>
        </div>

        <div className={style.item}>
        <span className={style.title}>Image Title</span>
        <img  src='https://www.planindia.org/wp-content/uploads/2023/03/DBSI.jpgi.ngo/wp-content/uploads/2021/02/600e2978af94c.jpg' alt=''/>
        </div>

        <div className={style.item}>
        <span className={style.title}>Image Title</span>
        <img  src='https://img.bollycurry.com/wallpapers/1280x1024/349958-access-life-ngo-kids-bid-adieu-to-shriya-saran.jpg' alt=''/>
        </div>

     </div>
        </div>    
        </section >
    )
}