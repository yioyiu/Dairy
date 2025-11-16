'use client'

import { MonthlySummary } from '@/types/summary'

interface SummaryCardProps {
  summary: MonthlySummary
  loading?: boolean
}

export function SummaryCard({ summary, loading }: SummaryCardProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
      <h2 className="text-2xl font-bold mb-4">本月学习总结</h2>

      {/* 整体概述 */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-3 text-blue-900">
          月度总结
        </h3>
        <p className="text-gray-800 leading-relaxed whitespace-pre-line">
          {summary.overview}
        </p>
      </div>

      {/* 重要收获 */}
      {summary.takeaways.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-900">
            重要收获
          </h3>
          <ul className="space-y-2">
            {summary.takeaways.map((takeaway, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-gray-700"
              >
                <span className="text-blue-500 font-bold mt-1">•</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 常见主题 */}
      {summary.themes.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900">
            常见主题
          </h3>
          <div className="space-y-3">
            {summary.themes.map((theme, index) => (
              <div
                key={index}
                className="p-3 bg-gray-50 rounded-lg"
              >
                <div className="font-medium text-gray-900 mb-1">
                  {theme.name}
                </div>
                <div className="text-sm text-gray-600">
                  {theme.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

