import type { Meta, StoryObj } from '@storybook/react';

import FitbitOutlined from '../../lib/social/FitbitOutlined';

const meta: Meta<typeof FitbitOutlined> = {
  component: FitbitOutlined,
  tags: ['autodocs'],
  title: 'social/FitbitOutlined',
};

export default meta;
type Story = StoryObj<typeof FitbitOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
