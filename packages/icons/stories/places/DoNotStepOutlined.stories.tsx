import type { Meta, StoryObj } from '@storybook/react';

import DoNotStepOutlined from '../../lib/places/DoNotStepOutlined';

const meta: Meta<typeof DoNotStepOutlined> = {
  component: DoNotStepOutlined,
  tags: ['autodocs'],
  title: 'places/DoNotStepOutlined',
};

export default meta;
type Story = StoryObj<typeof DoNotStepOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
