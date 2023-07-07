import type { Meta, StoryObj } from '@storybook/react';

import NightlightOutlined from '../../lib/device/NightlightOutlined';

const meta: Meta<typeof NightlightOutlined> = {
  component: NightlightOutlined,
  tags: ['autodocs'],
  title: 'device/NightlightOutlined',
};

export default meta;
type Story = StoryObj<typeof NightlightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
