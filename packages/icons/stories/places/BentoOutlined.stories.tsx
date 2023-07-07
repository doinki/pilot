import type { Meta, StoryObj } from '@storybook/react';

import BentoOutlined from '../../lib/places/BentoOutlined';

const meta: Meta<typeof BentoOutlined> = {
  component: BentoOutlined,
  tags: ['autodocs'],
  title: 'places/BentoOutlined',
};

export default meta;
type Story = StoryObj<typeof BentoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
