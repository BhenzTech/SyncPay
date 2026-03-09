use soroban_sdk::{contract, contractimpl, contracttype, Address, Env};

#[contract]
pub struct SyncPayContract;

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub enum DataKey {
    Employee(Address),
    ContributorShare(Address),
    TotalShares,
    PricePerShare,
}

#[contractimpl]
impl SyncPayContract {
    /// 1. Payroll Automation
    /// Add an employee with a specified salary.
    pub fn add_employee(env: Env, employee: Address, salary: i128) {
        if salary <= 0 {
            panic!("Salary must be positive");
        }
        let key = DataKey::Employee(employee);
        env.storage().persistent().set(&key, &salary);
    }

    /// Recursively fetch an employee's salary.
    pub fn get_employee_salary(env: Env, employee: Address) -> Option<i128> {
        let key = DataKey::Employee(employee);
        env.storage().persistent().get(&key)
    }

    /// 2. Revenue Sharing
    /// Set the percentage of revenue a contributor receives.
    pub fn set_revenue_share(env: Env, contributor: Address, percentage: u32) {
        if percentage > 100 {
            panic!("Percentage cannot exceed 100");
        }
        let key = DataKey::ContributorShare(contributor);
        env.storage().persistent().set(&key, &percentage);
    }

    /// Get a contributor's revenue share percentage.
    pub fn get_revenue_share(env: Env, contributor: Address) -> Option<u32> {
        let key = DataKey::ContributorShare(contributor);
        env.storage().persistent().get(&key)
    }

    /// 3. Investment Shares
    /// Issue investment shares to the revenue pool.
    pub fn issue_shares(env: Env, total_shares: u32, price_per_share: i128) {
        if total_shares == 0 || price_per_share <= 0 {
            panic!("Total shares and price per share must be positive");
        }
        env.storage().persistent().set(&DataKey::TotalShares, &total_shares);
        env.storage().persistent().set(&DataKey::PricePerShare, &price_per_share);
    }

    /// Get details of the issued shares.
    pub fn get_shares_info(env: Env) -> (Option<u32>, Option<i128>) {
        let total_shares = env.storage().persistent().get(&DataKey::TotalShares);
        let price_per_share = env.storage().persistent().get(&DataKey::PricePerShare);
        (total_shares, price_per_share)
    }
}

mod test;
