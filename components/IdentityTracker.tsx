const officers = [
  {
    id: "oliver",
    name: "Special Agent Matthew Oliver",
    agency: "U.S. Forest Service — Law Enforcement & Investigations",
    forests: "Willamette and Siuslaw National Forests",
    status: "confirmed" as const,
    confirmedBy: "Patrol Captain Felicia Sloan, March 30, 2026",
    notes: "Confirmed by his own supervisory captain in writing. Investigative branch, not patrol. Investigators do not conduct welfare checks."
  },
  {
    id: "officer-2",
    name: "Unidentified Officer",
    agency: "Unknown — Oregon State Police denied any records",
    status: "unidentified" as const,
    plate: "731 QRV",
    confirmedBy: "License plate captured on camera, March 24, 2026",
    notes: "Oregon State Police issued same-day blanket denial of any responsive records."
  },
  {
    id: "officer-3",
    name: "Unidentified Officer",
    agency: "Unknown",
    status: "unidentified" as const,
    notes: "Third officer present. No identification provided. Identity actively withheld."
  }
]

const statusColors = {
  confirmed: "border-green-600 bg-green-50",
  unidentified: "border-red-700 bg-red-50"
}

const statusLabels = {
  confirmed: "Confirmed",
  unidentified: "Identity Withheld"
}

export default function IdentityTracker() {
  return (
    <div className="my-10">
      <h2 className="text-lg font-serif font-semibold text-gray-900 mb-2">
        Who Was at the Gate
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        March 24, 2026 — Siltcoos Work Center, 82900 Highway 101, Florence, Oregon 97439
      </p>

      <div className="space-y-4">
        {officers.map((officer) => (
          <div
            key={officer.id}
            className={`border-l-4 px-5 py-4 ${statusColors[officer.status]}`}
          >
            <div className="flex items-start justify-between mb-1">
              <p className="text-base font-semibold text-gray-900">
                {officer.name}
              </p>
              <span className={`text-xs font-mono uppercase tracking-widest px-2 py-0.5 ${
                officer.status === "confirmed"
                  ? "text-green-700"
                  : "text-red-700"
              }`}>
                {statusLabels[officer.status]}
              </span>
            </div>

            {officer.agency && (
              <p className="text-sm text-gray-600 mb-1">{officer.agency}</p>
            )}

            {officer.forests && (
              <p className="text-sm text-gray-500 mb-1">{officer.forests}</p>
            )}

            {officer.plate && (
              <p className="text-sm font-mono text-gray-700 mb-1">
                Plate on camera: {officer.plate}
              </p>
            )}

            {officer.confirmedBy && (
              <p className="text-xs text-gray-500 mb-2">
                Confirmed by: {officer.confirmedBy}
              </p>
            )}

            <p className="text-sm text-gray-700 italic">
              {officer.notes}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-gray-200 pt-4">
        <p className="text-xs text-gray-500 leading-relaxed">
          You have an absolute right to know who the police are who come to your door.
          Two agencies have declined to provide that information. That refusal is itself part of the record.
        </p>
        <div className="mt-3 space-y-1">
          <p className="text-xs text-gray-500">
            OSP Public Records Request filed: April 3, 2026 — REF# PR27478
          </p>
          <p className="text-xs text-gray-500">
            OSP Response: Same-day blanket denial. No records found.
          </p>
          <p className="text-xs text-gray-500">
            Follow-up filed: April 4, 2026 — requesting scope and method of search.
          </p>
        </div>
      </div>
    </div>
  )
}
