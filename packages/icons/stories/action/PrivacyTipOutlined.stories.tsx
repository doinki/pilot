import type { Meta, StoryObj } from '@storybook/react';

import PrivacyTipOutlined from '../../lib/action/PrivacyTipOutlined';

const meta: Meta<typeof PrivacyTipOutlined> = {
  component: PrivacyTipOutlined,
  tags: ['autodocs'],
  title: 'action/PrivacyTipOutlined',
};

export default meta;
type Story = StoryObj<typeof PrivacyTipOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
