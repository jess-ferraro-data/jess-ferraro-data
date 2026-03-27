'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function WageComplianceStory() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section style={{
        height: '100vh',
        background: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.65)), linear-gradient(135deg, #0f766e 0%, #134e4a 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 2rem', zIndex: 2 }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            fontWeight: 900,
            marginBottom: '1.5rem',
            lineHeight: 0.95,
            letterSpacing: '-0.02em'
          }}>
            When the System Gets It Wrong
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            fontWeight: 300,
            marginBottom: '3rem',
            opacity: 0.95
          }}>
            A payroll data analysis revealing nine months of underpayment across a small retail chain
          </p>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '0.9rem',
          animation: 'bounce 2s infinite'
        }}>
          <div>Scroll to explore</div>
          <div style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>↓</div>
        </div>
      </section>

      {/* Prologue */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>
          <div style={{
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#64748b',
            marginBottom: '1rem',
            fontWeight: 600
          }}>
            Prologue
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '2rem',
            color: '#1a202c'
          }}>
            A Problem Hidden in Plain Sight
          </h2>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: 1.5,
            marginBottom: '3rem',
            color: '#4a5568',
            fontStyle: 'italic'
          }}>
            Small business wage underpayment rarely looks like theft. Most of the time, it looks exactly
            like what it is: a payroll system configured incorrectly when the business opened, compounding
            quietly with every pay cycle.
          </p>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            This project simulates the kind of analysis performed when employer records are examined against
            award requirements under a compliance review. Using a synthetic dataset modelled on real Central
            Coast NSW retail businesses and actual award provisions from the General Retail Industry Award 2020,
            I structured the analysis around the compliance principles outlined in Fair Work Ombudsman published
            guidance on small employer underpayment patterns, tracing a systematic underpayment from its source
            in a payroll misconfiguration to the total amount owed across nine months of trading.
          </p>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            The answer, when it came, was $33,753.11, owed to 20 workers who had no idea they were
            being underpaid.
          </p>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            margin: '4rem 0'
          }}>
            {[
              { number: '20',      label: 'Employees Underpaid',       context: 'Across three stores' },
              { number: '$33,753', label: 'Total Liability Identified', context: '9-month analysis period' },
              { number: '2',       label: 'Violation Types Detected',   context: 'System-based and conditional' },
              { number: '6,187',   label: 'Payable Segments Analysed', context: 'Across 5,632 individual shifts' }
            ].map((stat, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'center',
                border: '1px solid #e2e8f0',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #0f766e, #14b8a6)'
                }} />
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: '#0f766e',
                  marginBottom: '0.5rem',
                  lineHeight: 1
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#64748b',
                  fontWeight: 600
                }}>
                  {stat.label}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#94a3b8',
                  marginTop: '0.5rem'
                }}>
                  {stat.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 1 Banner */}
      <section style={{
        height: '100vh',
        background: 'linear-gradient(rgba(15, 118, 110, 0.85), rgba(19, 78, 74, 0.9)), linear-gradient(135deg, #0f766e 0%, #134e4a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 2rem', zIndex: 2 }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            marginBottom: '2rem',
            lineHeight: 1.1
          }}>
            Chapter 1: What the Employer Handed Over
          </h2>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: 1.6,
            opacity: 0.95
          }}>
            Three files. The starting point for this payroll compliance review.
          </p>
        </div>
      </section>

      {/* Chapter 1 Analysis */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            Three files. That&apos;s the starting point I designed this project around: the three record types
            a small retail employer would typically produce in response to a compliance request under s.712
            of the Fair Work Act 2009.
          </p>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            A staff masterfile listing every employee, their classification level, employment type, and the
            hourly rate recorded in the payroll system. A time and attendance export showing every shift
            worked, with clock-in, clock-out, and hours recorded but no rates attached. And a fortnightly
            payroll export showing what each employee was paid each fortnight as a lump sum, with no
            shift-level breakdown.
          </p>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            The employer in this case is Coastal Convenience Pty Ltd, a fictional three-store retail chain
            operating from Gosford Imperial Centre, Erina Fair, and Westfield Tuggerah on the Central Coast
            of NSW. Fifty employees. Three store managers. A mix of full-time, part-time, and casual staff
            across classification Levels 1 to 4 under the General Retail Industry Award 2020 [MA000004].
          </p>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            The first analytical step I built into this pipeline was a base rate audit, comparing every
            employee&apos;s recorded hourly rate against the award minimum for their employment type and
            classification level before examining a single shift record. The award rates are independently
            sourced from the FWO Pay Guide, not derived from the employer&apos;s own records. This separation
            between what the employer claims and what the award requires is the structural principle the
            entire analysis rests on.
          </p>

          <div style={{
            fontSize: '1.75rem',
            fontWeight: 600,
            lineHeight: 1.4,
            margin: '3rem 0',
            padding: '2rem',
            textAlign: 'center',
            color: '#1a202c',
            borderTop: '3px solid #0f766e',
            borderBottom: '3px solid #0f766e',
            fontStyle: 'italic',
            background: '#f0fdfa',
            borderRadius: '0.5rem'
          }}>
            <strong>First finding, before a single shift was examined:</strong> five employees had base
            rates below the award minimum for a casual employee at their level. The 25% casual loading
            had never been applied.
          </div>
        </div>
      </section>

      {/* Chapter 2 Banner */}
      <section style={{
        height: '100vh',
        background: 'linear-gradient(rgba(100, 116, 139, 0.85), rgba(51, 65, 85, 0.9)), linear-gradient(135deg, #64748b 0%, #334155 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 2rem', zIndex: 2 }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            marginBottom: '2rem',
            lineHeight: 1.1
          }}>
            Chapter 2: What the Shifts Revealed
          </h2>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: 1.6,
            opacity: 0.95
          }}>
            5,632 shifts. 6,187 payable segments. One structural principle.
          </p>
        </div>
      </section>

      {/* Chapter 2 Analysis */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: 1.5,
            marginBottom: '3rem',
            color: '#4a5568',
            fontStyle: 'italic'
          }}>
            Building the analytical picture required constructing something not present in the employer
            records.
          </p>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            A segment-level breakdown of every shift, with each segment assigned its correct award rate
            independently of what the employer paid. I built this as a separate data preparation step,
            keeping it out of the generated employer records since segment-level entitlement reconstruction
            is analytical work rather than something an employer produces.
          </p>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            The General Retail Industry Award specifies different rates for different shift conditions.
            Ordinary weekday hours attract one rate. Hours worked after 18:00 on a weekday attract an
            evening loading. Saturday, Sunday, and public holidays each have their own rates, applied
            to the entire shift. A weekday shift that crosses 18:00 must be split at that boundary,
            with the hours before attracting the ordinary rate and the hours after attracting the
            evening rate.
          </p>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            5,632 shifts became 6,187 payable segments. The 555 additional segments represent Thursday
            evening shifts at Erina Fair and Westfield Tuggerah, where both stores trade until 21:00,
            creating evening penalty exposure every week for employees rostered on that day.
          </p>

          {/* Underpayment by Shift Condition Chart */}
          <div style={{ margin: '4rem 0' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#1a202c',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              Underpayment by Shift Condition
            </h3>
            <img
              src="/images/wage-compliance/02_underpayment_by_shift_condition.png"
              alt="Bar chart showing underpayment by shift condition. Sunday and Saturday dominate total liability."
              style={{
                width: '100%',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '1px solid #e2e8f0'
              }}
            />
          </div>

          <div style={{
            fontSize: '1.75rem',
            fontWeight: 600,
            lineHeight: 1.4,
            margin: '3rem 0',
            padding: '2rem',
            textAlign: 'center',
            color: '#1a202c',
            background: '#f0fdfa',
            border: '1px solid #14b8a6',
            borderRadius: '0.5rem',
            fontStyle: 'italic'
          }}>
            <strong>Key finding:</strong> Sunday shifts generated the largest total underpayment,
            $13,048 across 208 affected segments. But the ordinary weekday figure pointed directly
            at a second, deeper problem: a base rate that was wrong before a single penalty shift
            was ever worked.
          </div>
        </div>
      </section>

      {/* Chapter 3 Banner */}
      <section style={{
        height: '100vh',
        background: 'linear-gradient(rgba(234, 88, 12, 0.8), rgba(154, 52, 18, 0.9)), linear-gradient(135deg, #ea580c 0%, #9a3412 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 2rem', zIndex: 2 }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            marginBottom: '2rem',
            lineHeight: 1.1
          }}>
            Chapter 3: The Statistical Signature
          </h2>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: 1.6,
            opacity: 0.95
          }}>
            Dollar figures confirm underpayment. Statistics reveal the pattern behind it.
          </p>
        </div>
      </section>

      {/* Chapter 3 Analysis */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            For every employee, the analysis calculated a fortnightly implied hourly rate: gross pay
            divided by hours recorded. For a correctly paid employee, this figure should vary. A fortnight
            with more Saturday and Sunday shifts should produce a higher implied rate than a quieter
            weekday-heavy fortnight, because penalty rates inflate the gross payment relative to hours worked.
          </p>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            For a non-compliant employee, the implied rate will show as flat. If the employer is paying one
            rate regardless of shift conditions, the ratio of gross pay to hours will be the same every
            fortnight, regardless of how many weekends, evenings, or public holidays were worked.
          </p>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#2d3748'
          }}>
            The coefficient of variation, the standard deviation of implied rates expressed as a
            percentage of the mean, quantifies this. A compliant employee shows meaningful variation.
            A non-compliant employee shows near-zero variation.
          </p>

          {/* Implied Rate Distribution Chart */}
          <div style={{ margin: '4rem 0' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#1a202c',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              Implied Hourly Rate Distribution — Casual Employees
            </h3>
            <img
              src="/images/wage-compliance/04_implied_rate_distribution.png"
              alt="Boxplot showing implied hourly rate distribution. Compliant employees show variation, non-compliant show flat rates."
              style={{
                width: '100%',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '1px solid #e2e8f0'
              }}
            />
          </div>

          <div style={{
            fontSize: '1.75rem',
            fontWeight: 600,
            lineHeight: 1.4,
            margin: '3rem 0',
            padding: '2rem',
            textAlign: 'center',
            color: '#1a202c',
            background: '#fff7ed',
            border: '1px solid #ea580c',
            borderRadius: '0.5rem',
            fontStyle: 'italic'
          }}>
            <strong>What I found most compelling:</strong> the coefficient of variation test independently
            identified all 20 underpaid employees using only the employer&apos;s payroll records and the
            award rates, with no access to internal dataset design and no violation flags. The statistical
            signal alone was sufficient for classification.
          </div>
        </div>
      </section>

      {/* Chapter 4 Banner */}
      <section style={{
        height: '100vh',
        background: 'linear-gradient(rgba(220, 38, 38, 0.8), rgba(153, 27, 27, 0.9)), linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 2rem', zIndex: 2 }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            marginBottom: '2rem',
            lineHeight: 1.1
          }}>
            Chapter 4: Two Violations, One Root Cause
          </h2>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: 1.6,
            opacity: 0.95
          }}>
            Different symptoms. Both traceable to the same payroll setup error.
          </p>
        </div>
      </section>

      {/* Chapter 4 Analysis */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>
          {/* Violation Type Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '1rem',
              padding: '2.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              borderTop: '4px solid #f9a825'
            }}>
              <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1.5rem' }}>⚠️</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#b45309', marginBottom: '1rem', textAlign: 'center' }}>
                Violation A
              </h3>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: '#1a202c', marginBottom: '1rem', textAlign: 'center' }}>
                Penalty Rate Non-Application
              </p>
              <p style={{ color: '#374151', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Affected 15 casual employees. Base rates were correct, with the casual ordinary rate
                including the 25% loading. But the payroll system had no penalty rate rules configured.
                Every shift, regardless of day or time, was paid at the ordinary rate.
              </p>
              <div style={{ background: '#fef3c7', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.875rem', color: '#92400e' }}>
                <strong>Total liability: approx. $16,700</strong> across 15 employees
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '1rem',
              padding: '2.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              borderTop: '4px solid #e64a19'
            }}>
              <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1.5rem' }}>🚨</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#c2410c', marginBottom: '1rem', textAlign: 'center' }}>
                Violation B
              </h3>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: '#1a202c', marginBottom: '1rem', textAlign: 'center' }}>
                Below Minimum Rate
              </p>
              <p style={{ color: '#374151', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Affected 5 casual employees. Base rates were wrong: the employer had entered the
                pre-loading FT/PT rate instead of the correct casual ordinary rate, without understanding
                that the 25% casual loading must be included. These employees were underpaid on every
                single shift, not just penalty shifts.
              </p>
              <div style={{ background: '#fee2e2', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.875rem', color: '#991b1b' }}>
                <strong>Total liability: approx. $16,200</strong> across 5 employees
              </div>
            </div>
          </div>

          {/* Store Chart */}
          <div style={{ margin: '4rem 0' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem', textAlign: 'center' }}>
              Underpayment Liability by Store
            </h3>
            <img
              src="/images/wage-compliance/01_underpayment_by_store.png"
              alt="Bar chart showing total underpayment liability by store location"
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}
            />
          </div>

          {/* Employee Liability Chart */}
          <div style={{ margin: '4rem 0' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem', textAlign: 'center' }}>
              Individual Underpayment — Casual Employees
            </h3>
            <img
              src="/images/wage-compliance/03_underpayment_by_employee.png"
              alt="Dot plot showing individual underpayment amounts coloured by violation type"
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}
            />
          </div>

          {/* Severity Chart */}
          <div style={{ margin: '4rem 0' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem', textAlign: 'center' }}>
              Underpayment Severity by Casual Employee
            </h3>
            <img
              src="/images/wage-compliance/06_underpayment_severity.png"
              alt="Bar chart showing underpayment as a percentage of correct entitlement per employee"
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}
            />
          </div>

          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem', color: '#2d3748' }}>
            Expressed as a percentage of correct entitlement, Violation B employees were underpaid by
            24 to 28 percent of what they were owed. Violation A employees ranged from 8 to 14 percent.
            In both cases, the workers had no visibility into the error: their payslips showed hours and
            a dollar amount, with no itemised breakdown of which rate applied to which shift.
          </p>
        </div>
      </section>

      {/* Chapter 5 Banner */}
      <section style={{
        height: '100vh',
        background: 'linear-gradient(rgba(15, 118, 110, 0.8), rgba(19, 78, 74, 0.9)), linear-gradient(135deg, #0f766e 0%, #134e4a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 2rem', zIndex: 2 }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            marginBottom: '2rem',
            lineHeight: 1.1
          }}>
            Chapter 5: How Liability Accumulated
          </h2>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: 1.6,
            opacity: 0.95
          }}>
            Both violations were embedded in the payroll system from the start.
          </p>
        </div>
      </section>

      {/* Chapter 5 Analysis */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem', color: '#2d3748' }}>
            Both violations were built into the payroll system from day one, compounding with every
            shift worked.
          </p>

          {/* Cumulative Chart */}
          <div style={{ margin: '4rem 0' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem', textAlign: 'center' }}>
              Cumulative Underpayment Over Time
            </h3>
            <img
              src="/images/wage-compliance/05_cumulative_underpayment.png"
              alt="Line chart showing cumulative underpayment accumulating steadily across the 9-month analysis period"
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}
            />
          </div>

          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem', color: '#2d3748' }}>
            The cumulative chart tells that story clearly. Liability accumulated in a smooth, consistent
            line across all 20 pay periods. There are no spikes, no anomalies, no periods of correction.
            In designing this scenario, I wanted to reflect the reality that systematic payroll
            misconfiguration is often invisible to the employer: the system produces a number, payslips
            go out, and nothing in the ordinary course of business surfaces the error.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem', color: '#2d3748' }}>
            At $33,753 across nine months, the annualised liability is approximately $45,000. For a small
            retail chain operating on thin margins, a back-payment demand of that magnitude would represent
            a significant financial event, entirely preventable had the payroll system been configured
            correctly at setup.
          </p>
        </div>
      </section>

      {/* Methodology Section */}
      <section style={{ background: '#0f172a', color: 'white', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem', color: 'white' }}>
            Methodology and Technical Implementation
          </h2>
          <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#94a3b8', marginBottom: '3rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Transparency in analysis design, data sources, and technical decisions
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {[
              {
                title: '📊 Data Sources and Design',
                colour: '#60a5fa',
                items: [
                  'Fully synthetic dataset generated in R',
                  'Store trading hours sourced from Gosford Imperial Centre, Erina Fair, and Westfield Tuggerah',
                  'Award rates from FWO Pay Guide, GRIA MA000004, effective 1 July 2025',
                  'NSW public holidays: gazetted calendar 2025 to 26',
                  'Violation patterns modelled on FWO published guidance on small employer compliance'
                ]
              },
              {
                title: '🔧 Technical Implementation',
                colour: '#34d399',
                items: [
                  'R with tidyverse and lubridate throughout',
                  'Four-script pipeline: dataset builder, data preparation, compliance analysis, visualisation',
                  'Relational dataset design with six tables and primary key joins',
                  'Segment-level entitlement reconstruction using award_rate_id as the join key',
                  'Coefficient of variation as the primary statistical detection metric',
                  'ggplot2 visualisations with custom theme'
                ]
              },
              {
                title: '📐 Script Architecture',
                colour: '#f472b6',
                items: [
                  '01_build_dataset.R generates synthetic employer records into data/raw/',
                  '02_data_preparation.R validates, enriches, and builds segments into data/prepared/',
                  '03_compliance_analysis.R handles reconciliation and liability quantification into data/analysis/',
                  '04_visualisation.R produces portfolio charts into output/charts/'
                ]
              }
            ].map((card, index) => (
              <div key={index} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '2rem', backdropFilter: 'blur(10px)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: card.colour }}>
                  {card.title}
                </h3>
                <ul style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, listStyle: 'none', padding: 0 }}>
                  {card.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: '#60a5fa' }}>
              📋 A Note on Methodology
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.7 }}>
              The analytical separation between employer records and award entitlements is a deliberate
              design decision. Entitlements are reconstructed from the award independently and are never
              derived from what the employer paid. This approach is consistent with the compliance
              principles described in FWO published guidance, and it produces a finding that stands on
              its own logic: the gap between what the award requires and what the payroll recorded,
              calculated without assumptions about the employer&apos;s intent.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)', color: 'white', padding: '6rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '2rem', lineHeight: 1.1 }}>
            Interested in the analysis?
          </h2>
          <p style={{ fontSize: '1.3rem', lineHeight: 1.6, marginBottom: '3rem', opacity: 0.9 }}>
            This project demonstrates end-to-end data analysis in R, from synthetic data generation
            through to compliance findings and visualisation. The complete code is available on GitHub.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '3rem' }}>
            <Link href="/contact" style={{ background: 'white', color: '#0f766e', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', border: '2px solid white' }}>
              💬 Start a Conversation
            </Link>
            <Link href="/projects" style={{ background: 'transparent', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', border: '2px solid rgba(255,255,255,0.3)' }}>
              📊 More Projects
            </Link>
            <Link href="/" style={{ background: 'transparent', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', border: '2px solid rgba(255,255,255,0.3)' }}>
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
      `}</style>
    </main>
  )
}