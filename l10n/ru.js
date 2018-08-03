OC.L10N.register(
    "impersonate",
    {
    "Could not impersonate user" : "Не удалось войти в систему под именем другого пользователя",
    "Impersonate" : "Вход под именем другого пользователя",
    "Are you sure you want to impersonate \"{userId}\"?" : "Действительно войти под именем «{userId}»?",
    "Impersonate user" : "Вход под другим именем",
    "Logged in as {uid}" : "Вход выполнено под именем «{uid}»",
    "User not found" : "Пользователь не найден",
    "Can not impersonate the user because it was never logged in." : "Невозможно войти в систему под именем другого пользователя, поскольку он никогда не выполнял вход",
    "Impersonate other users" : "Вход под именем других пользователей",
    "By installing the impersonate app of your Nextcloud you enable administrators to impersonate other users on the Nextcloud server. This is especially useful for debugging issues reported by users.\n\nTo impersonate an user an administrator has to simply follow the following three steps:\n\n1. Login as administrator to Nextcloud\n2. Open the user administration interface\n3. Select the impersonate button on the affected user\n4. Confirm the impersonation\n\nThe administrator is then logged-in as the user, to switch back to the regular user account they simply have to press the logout button.\n\n**Note:**\n\n- This app is not compatible with instances that have encryption enabled.\n- While impersonate actions are logged note that actions performed impersonated will be logged as the impersonated user.\n- Impersonating an user is only possible after their first login." : "Установив приложение для входа под другими пользователями Nextcloud, вы разрешаете администраторам выдавать себя за других пользователей на сервере Nextcloud. Это особенно полезно для отладки проблем, о которых сообщают пользователи.\n\nЧтобы войти под другим пользователем, администратор должен просто выполнить следующие три шага:\n\n1. Войдите как администратор в Nextcloud\n2. Откройте интерфейс администрирования пользователя.\n3. Выберите кнопку входа под этим пользователем.\n4. Подтвердите вход.\n\nПосле этого администратор входит в систему как пользователь, а чтобы вернуться к обычной учетной записи пользователя, просто нажмите кнопку выхода.\n\n**Примечание:**\n\n- Это приложение несовместимо с экземплярами(instances), в которых включено шифрование.\n- Во время входа под другим пользователем выполняемые действия заносятся в журнал, как действия выполненные самим пользователем.\n- Вход под другим пользователем возможно только после его первого входа в систему.",
    "These groups will be able to impersonate users they are allowed to administrate. If you remove all groups, every group administrator will be allowed to impersonate." : "Эти группы помогут войти в систему под именем другого пользователя для тех пользователей, которые администрируются ими. Если вы удалите все группы, каждый администратор группы сможет войти в систему под именем другого пользователя.",
    "Not enough permissions to impersonate user" : "Нехватка прав доступа для входа в систему под именем другого пользователя"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
