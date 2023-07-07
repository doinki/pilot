import type { Meta, StoryObj } from '@storybook/react';

import RampLeftOutlined from '../../lib/maps/RampLeftOutlined';

const meta: Meta<typeof RampLeftOutlined> = {
  component: RampLeftOutlined,
  tags: ['autodocs'],
  title: 'maps/RampLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof RampLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
