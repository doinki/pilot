import type { Meta, StoryObj } from '@storybook/react';

import NextPlanOutlined from '../../lib/action/NextPlanOutlined';

const meta: Meta<typeof NextPlanOutlined> = {
  component: NextPlanOutlined,
  tags: ['autodocs'],
  title: 'action/NextPlanOutlined',
};

export default meta;
type Story = StoryObj<typeof NextPlanOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
