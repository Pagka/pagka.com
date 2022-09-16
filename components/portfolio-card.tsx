/* eslint-disable @next/next/no-img-element */
export default function PortfolioCard({
  name,
  description,
  href,
  location,
  expertise,
  thumbnail,
}: any) {
  return (
    <div className="w-full p-4 text-base">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="md:w-48 lg:h-full ">
          <img
            src={thumbnail}
            alt={name}
            className="object-cover w-full h-12 rounded-md md:w-48 lg:w-64 md:h-64"
          />
        </div>
        <div className="md:flex">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-medium serif text-slate-900">
              {name}
            </h3>
            <p className="mt-1 sans">{description}</p>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="gap-2">
              <p className="text-sm text-gray-600">Location</p>
              <p className="text-slate-900">{location}</p>
            </div>
            <div className="gap-2">
              <p className="text-sm text-gray-600">Field</p>
              <p className="text-slate-900">{expertise}</p>
            </div>
            <div className="gap-2">
              <p className="text-sm text-gray-600">Website</p>
              <p className="text-slate-900">
                <a href={href} rel="noreferrer" target="_blank">
                  {href}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
