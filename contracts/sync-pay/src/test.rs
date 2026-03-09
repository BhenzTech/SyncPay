#![cfg(test)]

use super::*;
use soroban_sdk::{testutils::Address as _, Address, Env};

#[test]
fn test_add_employee() {
    let env = Env::default();
    let contract_id = env.register(SyncPayContract, ());
    let client = SyncPayContractClient::new(&env, &contract_id);

    let employee = Address::generate(&env);
    let salary = 5000_i128;

    client.add_employee(&employee, &salary);
    let fetched_salary = client.get_employee_salary(&employee);
    
    assert_eq!(fetched_salary, Some(salary));
}

#[test]
fn test_set_revenue_share() {
    let env = Env::default();
    let contract_id = env.register(SyncPayContract, ());
    let client = SyncPayContractClient::new(&env, &contract_id);

    let contributor = Address::generate(&env);
    let percentage = 15_u32;

    client.set_revenue_share(&contributor, &percentage);
    let fetched_share = client.get_revenue_share(&contributor);

    assert_eq!(fetched_share, Some(percentage));
}

#[test]
fn test_issue_shares() {
    let env = Env::default();
    let contract_id = env.register(SyncPayContract, ());
    let client = SyncPayContractClient::new(&env, &contract_id);

    let total_shares = 1000_u32;
    let price_per_share = 10_i128;

    client.issue_shares(&total_shares, &price_per_share);
    let (fetched_total, fetched_price) = client.get_shares_info();

    assert_eq!(fetched_total, Some(total_shares));
    assert_eq!(fetched_price, Some(price_per_share));
}

#[test]
#[should_panic(expected = "Salary must be positive")]
fn test_add_employee_invalid_salary() {
    let env = Env::default();
    let contract_id = env.register(SyncPayContract, ());
    let client = SyncPayContractClient::new(&env, &contract_id);

    let employee = Address::generate(&env);
    client.add_employee(&employee, &0);
}

#[test]
#[should_panic(expected = "Percentage cannot exceed 100")]
fn test_set_revenue_share_invalid_percentage() {
    let env = Env::default();
    let contract_id = env.register(SyncPayContract, ());
    let client = SyncPayContractClient::new(&env, &contract_id);

    let contributor = Address::generate(&env);
    client.set_revenue_share(&contributor, &101);
}
