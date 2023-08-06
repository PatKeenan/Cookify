const textColors = [
    'text-red-500',
    'text-blue-400',
    'text-green-400',
    'text-yellow-500',
    'text-pink-500',
    'text-purple-500',
    'text-indigo-500',
    'text-gray-500',
    'text-fuchsia-500',
    'text-rose-500',
    'text-cyan-500',
    'text-emerald-500',
    'text-lime-500',
    'text-sky-500',
    'text-violet-500',
    'text-amber-500',
    'text-orange-500',
    'text-teal-500',
]
const gradientToColors = [
    'to-red-500',
    'to-blue-400',
    'to-green-400',
    'to-yellow-500',
    'to-pink-500',
    'to-purple-500',
    'to-indigo-500',
    'to-gray-500',
    'to-fuchsia-500',
    'to-rose-500',
    'to-cyan-500',
    'to-emerald-500',
    'to-lime-500',
    'to-sky-500',
    'to-violet-500',
    'to-amber-500',
    'to-orange-500',
    'to-teal-500',
]
const bgColors = [
    'bg-red-500',
    'bg-blue-400',
    'bg-green-400',
    'bg-yellow-500',
    'bg-pink-500',
    'bg-purple-500',
    'bg-indigo-500',
    'bg-gray-500',
    'bg-fuchsia-500',
    'bg-rose-500',
    'bg-cyan-500',
    'bg-emerald-500',
    'bg-lime-500',
    'bg-sky-500',
    'bg-violet-500',
    'bg-amber-500',
    'bg-orange-500',
    'bg-teal-500',
]


export const randomColor = (arg: 'text' | 'bg' | 'gradient') => {
    const colors = arg === 'text' ? textColors : arg === 'bg' ? bgColors : gradientToColors
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}