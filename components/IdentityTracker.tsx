const officers = [
  {
    id: "oliver",
    name: "Special Agent Matthew Oliver",
    agency: "U.S. Forest Service — Law Enforcement & Investigations",
    forests: "Willamette and Siuslaw National Forests",
    status: "escorted" as const,
    confirmedBy: "Patrol Captain Felicia Sloan, March 30, 2026",
    notes: "Per the District Ranger, the Forest Service did not initiate the interview — its law enforcement officer accompanied Oregon State Police to unlock the gate and guide them to a restricted area."
  },
  {
    id: "hyde",
    name: "Trooper Jake Hyde — Badge 56397",
    agency: "Oregon State Police",
    status: "confirmed" as const,
    confirmedBy: "OSP CAD record SP26097765, released July 14, 2026",
    notes: "Named as the primary unit in the state's dispatch record."
  },
  {
    id: "officer-3",
    name: "Unidentified Officer",
    agency: "Unknown",
    status: "unidentified" as const,
    plate: "731 QRV",
    notes: "Third officer present. No identification provided."
  }
]

const statusColors = {
  confirmed: "border-green-600 bg-green-50",
  escorted: "border-slate-400 bg-slate-50",
  unidentified: "border-red-700 bg-red-50"
}

const statusLabels = {
  confirmed: "Confirmed",
  escorted: "Escorted",
  unidentified: "Identity Withheld"
}

const statusTextColors = {
  confirmed: "text-green-700",
  escorted: "text-slate-600",
  unidentified: "text-red-700"
}

export default function IdentityTracker() {
  return (
    <div className="my-10">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        WHO WAS THERE
      </h2>

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
              <span className={`text-xs font-mono uppercase tracking-widest px-2 py-0.5 ${statusTextColors[officer.status]}`}>
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
    </div>
  )
}
