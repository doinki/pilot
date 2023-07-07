import type { Meta, StoryObj } from '@storybook/react';

import MinorCrashOutlined from '../../lib/maps/MinorCrashOutlined';

const meta: Meta<typeof MinorCrashOutlined> = {
  component: MinorCrashOutlined,
  tags: ['autodocs'],
  title: 'maps/MinorCrashOutlined',
};

export default meta;
type Story = StoryObj<typeof MinorCrashOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
