import type { Meta, StoryObj } from '@storybook/react';

import BrightnessMediumOutlined from '../../lib/device/BrightnessMediumOutlined';

const meta: Meta<typeof BrightnessMediumOutlined> = {
  component: BrightnessMediumOutlined,
  tags: ['autodocs'],
  title: 'device/BrightnessMediumOutlined',
};

export default meta;
type Story = StoryObj<typeof BrightnessMediumOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
