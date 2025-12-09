'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

type Course = {
  id: number;
  title: string;
  subtitle: string;
  progress: string;
  status: string;
  image: string;
  color?: string;
  icon?: string;
};

export default function CyberSecurityDashboard() {
  const router = useRouter();
  const handleBack = () => router.back();
  const courses: Course[] = [
    {
      id: 1,
      title: 'UNDERSTANDING KALI LINUX',
      subtitle: 'KOAN',
      progress: '25/25',
      status: 'COMPLETED',
      image: '/Badge1.png',
    },
    {
      id: 2,
      title: 'EXPLORING DIFFERENT SER...',
      subtitle: 'ARGONAUT',
      progress: '25/25',
      status: 'COMPLETED',
      image: '/Badge2.png',
    },
    {
      id: 3,
      title: 'MACOS SECURITY FUNDAM...',
      subtitle: 'THE ORCHARD',
      progress: '28/28',
      status: 'COMPLETED',
      image: '/Badge3.png',
    },
    {
      id: 4,
      title: 'WEB ATTACK FUNDAMENT...',
      subtitle: 'FANUS',
      progress: '0/9',
      status: 'START',
      image: '/Badge4.png',
    },
    {
      id: 5,
      title: 'INTRODUCTION TO WIRELE...',
      subtitle: 'MAGIC CARPET',
      progress: '7/13',
      status: 'CONTINUE',
      image: '/Badge5.png',
    },
    {
      id: 6,
      title: 'LINUX NETWORKING & SER...',
      subtitle: '',
      progress: '9/33',
      status: 'CONTINUE',
      image: '/Badge6.png',
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#040E16] text-white font-sans flex flex-col lg:flex-row">
      {/* Header */}
      <div className="hidden md:block">
              <Sidebar />
            </div>
      <div className="w-full md:ml-20 md:w-[calc(100%-5rem)] flex flex-col">
      <Header breadcrumbTitle='Offensive Operations...'/>

      {/* Main Content */}
      <main className="p-4 sm:p-8 overflow-y-auto flex-1">
        <div className="flex items-center gap-3 mb-8">
          <button onClick={handleBack} className="hover:opacity-80 transition">
            <Image src="/elements1.png" alt="Back" width={16} height={10} className="w-[16px] h-[10px] text-gray-400 hover:text-white" />
          </button>
          <h1 className="text-sm font-semibold">Cyber command</h1>
        </div>

        <div className="relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10 bg-linear-to-br from-[#5CC8F1] via-[#10243A] to-[#061222] ">

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[-96px] bottom-[-120px] z-30 h-[360px]"
          >
            <div className="absolute inset-0 bg-linear-to-t from-[#02060C] via-[#041124]/80 to-transparent" />
            <div className="absolute inset-x-24 bottom-0 h-64 rounded-[999px] bg-[#4CD3FF]/20 blur-[140px]" />
          </div>

          {/* Hero Image */}
          <div className="relative z-10 rounded-2xl overflow-hidden">
            <div className="relative w-full min-h-[320px] sm:min-h-[480px] lg:min-h-[620px]">
                <Image
                  src="/cyber-face.png"
                  alt="Cyber Face"
                  fill
                  className="object-cover object-top opacity-90"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                 <div className="absolute inset-0 top-1/4">
                  <Image
                    src="/half.png"
                    alt="Neon Circuit Overlay"
                    width={200}
                    height={200}
                    className="object-cover object-top opacity-80 mix-blend-screen"
                  />
                </div>
              </div>
            <div className="relative z-40 px-4 sm:px-8 py-6 flex flex-col items-center text-center">
              <h2
                className="text-[32px] sm:text-[48px] lg:text-[71.24px] font-bold bg-linear-to-br from-[#A4E1F8] via-[#5CB4C8] to-[#0C5062] text-transparent bg-clip-text"
                style={{ fontFamily: 'nasdaqer', letterSpacing: '-1.94px' }}
              >
                SECURITY
              </h2>
              <div className='flex flex-col sm:flex-row px-4 sm:px-23 items-center sm:gap-7 gap-2 sm:-mt-4 w-full'>
                <div
                  className='text-[24px] sm:text-[34px] lg:text-[37.74px] font-nasdaqer font-bold bg-linear-to-br from-[#A4E1F8] via-[#5CB4C8] to-[#0C5062] text-transparent bg-clip-text'
                  style={{ letterSpacing: '-1.03px' }}
                >
                  ESSENTIALS
                </div>
              <div className="flex items-center gap-1 font-bold text-[15px] sm:text-[18.87px]">
              <span className='text-[#FFAC33]'>SES</span> <span className='text-[#C18D40]'>100</span>
              </div>
              </div>
            </div>
          </div>
          {/* Padlock Image - Top Right Corner */}
                <div className="absolute bottom-6 right-4 sm:bottom-75 sm:-right-4 w-32 h-32 sm:w-[200px] sm:h-[200px] opacity-70 pointer-events-none">
                  <Image
                    src="/full.png"
                    alt="Security Padlock"
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>

          {/* Course List */}
          <div className="relative z-10 px-4 sm:px-6">
            <div className="flex justify-end gap-2 text-xs tracking-widest">
              <div className="font-neofolia text-17px">AJAEQ</div>
              <Image
                src="/logo.png"
                alt="Luminary"
                width={0}
                height={0}
                className='-mt-2 w-[28px] h-[30px] sm:w-[35px] sm:h-[36px]'
              />            
              <div className="font-neofolia text-17px">LUMINARY</div>
            </div>
          
          <div className="space-y-4 w-full max-w-[550px] pt-10 mx-auto">
            {courses.map((course) => (
              <div
                key={course.id}
                className=" bg-linear-to-br from-cyan-500/60 via-cyan-500/15 to-transparent p-px transition-all"
              >
                <div className="bg-linear-to-br from-[#060E1B] to-[#061222] border border-white/5 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className={`w-16 h-16 -mt-1.5 bg-linear-to-br ${course.color ?? ''} rounded-lg flex items-center justify-center text-2xl shrink-0`}>
                    {course.image ? (
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    ) : (
                      course.icon ?? ''
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0 w-full">
                    <h3 className="font-bold text-[13px] sm:text-[14.67px] text-[#62D2F9] mb-1">
                      {course.title}
                    </h3>
                    <p className="text-[8.25px] text-gray-500 uppercase tracking-wider">{course.subtitle}</p>
                  </div>
                  
                  <div className="flex w-full sm:w-auto items-center justify-between sm:justify-end gap-3 sm:gap-4">
                    <span className="text-[10px] sm:text-[10.98px] text-[#62D2F9] whitespace-nowrap">{course.progress}</span>
                    <button 
                      className={`w-full sm:w-[138.05px] h-[34px] sm:h-[31.38px] rounded-lg text-[10px] sm:text-[10.98px] font-bold uppercase tracking-wider ${
                        course.status === 'COMPLETED' 
                          ? 'bg-linear-to-br from-[#62D2F9] via-[#174F7C] to-[#000000] text-[#62D2F9]' 
                          : course.status === 'START'
                          ? 'bg-linear-to-br from-[#174F7C] via-[#174F7C] to-[#000000] text-[#63FDFD] hover:bg-cyan-600'
                          : 'bg-linear-to-br from-[#174F7C] via-[#174F7C] to-[#000000] text-[#63FDFD] hover:bg-gray-600'
                      }`}
                    >
                      {course.status}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 lg:p-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between bg-[#040E1633] border-b-2 rounded-b-md border-gray-900 border-x-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">
            <button className="h-[32px] w-[110px] bg-[#9900824D] text-[#990082] rounded-md font-bold font-neofolia uppercase text-sm border-2 border-[#990082]">
              Scout
            </button>
            <div className="flex items-center gap-3 sm:gap-4 text-sm text-gray-400">
              <span className="text-[#21B9E8] font-neofolia">21 DAYS</span>
              <span className='text-[#21B9E8]'>|</span>
              <span className="text-[#21B9E8] font-neofolia">34 NODES</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <Image src="/Vector.png" alt="" width={0} height={0} className='w-5 h-5 mt-1.5'/>

            <div className='flex gap-1 border rounded-[5.3px] border-[#FFFFFF0D] w-full sm:w-[184.37px] h-[44.5px] items-center justify-center'>
              {[1,2,3,4].map((star) => (
                <Image key={`star-${star}`} src="/Star1.png" alt="" width={0} height={0} className="w-5 h-5 text-orange-400" />
              ))}
              <Image src="/Star2.png" alt="" width={0} height={0} className="w-5 h-5 text-orange-400" />
            </div>
            <div className='border rounded-[10.6px] p-3 w-10 h-10 border-[#E2E8FF0D] flex items-center justify-center'>
              <div className="w-2 h-2 bg-red-500 rounded-full "></div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <button 
              onClick={() => router.push('/cyber/clusters')}
              className="relative overflow-hidden w-full sm:w-[174px] h-[40px] bg-[#D1D1D1] text-[#6A2936] text-xs rounded-md font-semibold tracking-[0.2em] uppercase shadow-[13px_3px_24px_rgba(255,100,100,0.55)] hover:bg-[#E1E1E1] transition-colors"
            >
              Enroll
            </button>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}