import type { Meta, StoryObj } from '@storybook/react';

import CalculateOutlined from '../../lib/content/CalculateOutlined';

const meta: Meta<typeof CalculateOutlined> = {
  component: CalculateOutlined,
  tags: ['autodocs'],
  title: 'content/CalculateOutlined',
};

export default meta;
type Story = StoryObj<typeof CalculateOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
