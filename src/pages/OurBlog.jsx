import { BgTitle } from '../components/BgTitle/BgTitle';
import { BlogContent } from '../components/_Sections/BlogContent/BlogContent';


export function OurBlog() {
   const title = 'Our blog';

   return (
      <>
         <BgTitle title={title} />
         <BlogContent />
      </>
   );
}