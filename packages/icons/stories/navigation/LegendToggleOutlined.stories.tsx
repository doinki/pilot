import type { Meta, StoryObj } from '@storybook/react';

import LegendToggleOutlined from '../../lib/navigation/LegendToggleOutlined';

const meta: Meta<typeof LegendToggleOutlined> = {
  component: LegendToggleOutlined,
  tags: ['autodocs'],
  title: 'navigation/LegendToggleOutlined',
};

export default meta;
type Story = StoryObj<typeof LegendToggleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
