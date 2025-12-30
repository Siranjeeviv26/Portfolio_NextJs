'use client';

import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import ResumeButton from './ResumeButton';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '90427 07001',
    href: 'tel:9042707001',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'siranjeevi26@outlook.com',
    href: 'mailto:siranjeevi26@outlook.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/siranjeevi26',
    href: 'https://github.com/Siranjeeviv26',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/siranjeevi',
    href: 'https://www.linkedin.com/in/siranjeevi-v-29216a226/',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-6">
          Get In Touch
        </h2>

        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-14">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to collaborate. Let’s connect.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-teal-600 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <contact.icon className="h-6 w-6" />
                </div>

                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {contact.label}
                </h3>

                <p className="text-sm text-gray-600 break-all">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// 'use client';

// import { Mail, Phone, Github, Linkedin } from 'lucide-react';

// const contactInfo = [
//   {
//     icon: Phone,
//     label: 'Phone',
//     value: '90427 07001',
//     href: 'tel:9042707001',
//   },
//   {
//     icon: Mail,
//     label: 'Email',
//     value: 'siranjeevi26@outlook.com',
//     href: 'mailto:siranjeevi26@outlook.com',
//   },
//   {
//     icon: Github,
//     label: 'GitHub',
//     value: 'github.com/siranjeevi26',
//     href: 'https://github.com/Siranjeeviv26',
//   },
//   {
//     icon: Linkedin,
//     label: 'LinkedIn',
//     value: 'linkedin.com/in/siranjeevi',
//     href: 'https://www.linkedin.com/in/siranjeevi-v-29216a226/',
//   },
// ];

// export default function ContactSection() {
//   return (
//     <section id="contact" className="py-24 px-6">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-semibold text-center text-gray-900 mb-6">
//           Get In Touch
//         </h2>

//         <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-14">
//           I’m always open to discussing new projects, creative ideas, or
//           opportunities to collaborate. Let’s connect.
//         </p>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {contactInfo.map((contact, index) => (
//             <a
//               key={index}
//               href={contact.href}
//               target={contact.href.startsWith('http') ? '_blank' : undefined}
//               rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//               className="group"
//             >
//               <div className="bg-white rounded-xl p-6 text-center border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
//                 <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-teal-600 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
//                   <contact.icon className="h-6 w-6" />
//                 </div>

//                 <h3 className="text-base font-semibold text-gray-800 mb-1">
//                   {contact.label}
//                 </h3>

//                 <p className="text-sm text-gray-600 break-all">
//                   {contact.value}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
