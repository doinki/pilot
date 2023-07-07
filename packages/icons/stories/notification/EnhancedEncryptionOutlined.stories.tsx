import type { Meta, StoryObj } from '@storybook/react';

import EnhancedEncryptionOutlined from '../../lib/notification/EnhancedEncryptionOutlined';

const meta: Meta<typeof EnhancedEncryptionOutlined> = {
  component: EnhancedEncryptionOutlined,
  tags: ['autodocs'],
  title: 'notification/EnhancedEncryptionOutlined',
};

export default meta;
type Story = StoryObj<typeof EnhancedEncryptionOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
