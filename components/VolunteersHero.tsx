// The second page of the testimony PDF, continued.
//
// That page carries the shield and the line "If this happened to you, it has
// a name." Anyone who arrives here arrives from it. The line is held, and
// then it is replaced by the name.
//
// Pure CSS, no client JavaScript: the animation runs in the static HTML, and
// a reader who prefers reduced motion is shown the finished state instead.

import Icon from "@/components/Icon";

export default function VolunteersHero() {
    return (
        <section className="mb-12 overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
            <style
                dangerouslySetInnerHTML={{
                    __html: `
@keyframes vh-shield { from { opacity: 0; transform: scale(.88) } to { opacity: 1; transform: none } }
@keyframes vh-in     { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
@keyframes vh-out    { from { opacity: 1 } to { opacity: 0; transform: translateY(-8px) } }
@keyframes vh-rule   { from { transform: scaleX(0) } to { transform: scaleX(1) } }
.vh-shield { animation: vh-shield .7s cubic-bezier(.2,.7,.3,1) both; }
.vh-rule   { animation: vh-rule .8s cubic-bezier(.2,.7,.3,1) .5s both; transform-origin: center; }
.vh-ask    { animation: vh-in .8s ease .9s both, vh-out .6s ease 4.2s forwards; }
.vh-name   { animation: vh-in .9s cubic-bezier(.2,.7,.3,1) 4.6s both; }
@media (prefers-reduced-motion: reduce) {
  .vh-shield, .vh-rule, .vh-name { animation: none; }
  .vh-ask { animation: none; opacity: 0; }
}`,
                }}
            />

            <div className="flex flex-col items-center px-6 py-12 text-center sm:py-16">
                <div className="vh-shield flex h-24 w-24 items-center justify-center rounded-2xl bg-red-700 shadow-sm sm:h-28 sm:w-28">
                    <Icon name="Shield" className="h-12 w-12 text-white sm:h-14 sm:w-14" size={56} strokeWidth={1.5} />
                </div>

                <div className="vh-rule mt-7 h-px w-24 bg-red-300" aria-hidden />

                {/* Both lines occupy the same box, so the swap does not move the page. */}
                <div className="relative mt-7 min-h-[7rem] w-full max-w-2xl sm:min-h-[8.5rem]">
                    <div className="vh-ask absolute inset-0 flex items-center justify-center">
                        <p className="text-xl leading-snug text-gray-700 sm:text-2xl">
                            If this happened to you,
                            <br />
                            it has a name.
                        </p>
                    </div>
                    <div className="vh-name absolute inset-0 flex items-center justify-center">
                        <p className="text-4xl font-bold tracking-tight text-red-700 sm:text-6xl">
                            Displacement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
