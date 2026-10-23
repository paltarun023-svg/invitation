import { Check, Zap, Crown, Building2 } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: '29',
    period: '/month',
    description: 'Perfect for small businesses getting started with AI content.',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/20',
    popular: false,
    features: [
      '50 AI photos per month',
      '5 AI videos per month',
      '720p video resolution',
      'Basic style presets',
      'Standard backgrounds',
      'Email support',
      'Commercial license',
    ],
  },
  {
    name: 'Professional',
    icon: Crown,
    price: '79',
    period: '/month',
    description: 'For growing businesses that need more content and higher quality.',
    color: 'from-violet-500 to-fuchsia-500',
    borderColor: 'border-violet-500/30',
    popular: true,
    features: [
      '200 AI photos per month',
      '25 AI videos per month',
      '4K video resolution',
      'All style presets',
      'Custom backgrounds',
      'Brand kit integration',
      'Priority support',
      'Batch processing',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    icon: Building2,
    price: '199',
    period: '/month',
    description: 'For large teams with high-volume content needs.',
    color: 'from-amber-500 to-orange-500',
    borderColor: 'border-amber-500/20',
    popular: false,
    features: [
      'Unlimited AI photos',
      'Unlimited AI videos',
      '8K video resolution',
      'Custom AI model training',
      'Dedicated account manager',
      'White-label options',
      'SLA guarantee',
      'Team collaboration',
      'Advanced analytics',
      'Custom integrations',
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm mb-4">
            <Crown className="w-3.5 h-3.5" />
            Simple Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Plans That
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"> Grow </span>
            With You
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Start free, upgrade when you're ready. All plans include commercial usage rights.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all hover:-translate-y-1 ${
                plan.popular
                  ? 'bg-gradient-to-b from-violet-500/10 to-fuchsia-500/5 border-2 border-violet-500/30'
                  : 'bg-white/[0.03] border border-white/[0.08]'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-xs font-semibold text-white shadow-lg shadow-violet-500/30">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02]'
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                }`}
              >
                {plan.popular ? 'Start Free Trial' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Need a custom plan? <a href="#" className="text-violet-400 hover:text-violet-300 underline">Contact our sales team</a>
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-emerald-400" />
              No credit card required
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-emerald-400" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-emerald-400" />
              14-day free trial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
