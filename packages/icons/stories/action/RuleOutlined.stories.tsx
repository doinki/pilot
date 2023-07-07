import type { Meta, StoryObj } from '@storybook/react';

import RuleOutlined from '../../lib/action/RuleOutlined';

const meta: Meta<typeof RuleOutlined> = {
  component: RuleOutlined,
  tags: ['autodocs'],
  title: 'action/RuleOutlined',
};

export default meta;
type Story = StoryObj<typeof RuleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
