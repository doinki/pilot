import type { Meta, StoryObj } from '@storybook/react';

import LensBlurOutlined from '../../lib/device/LensBlurOutlined';

const meta: Meta<typeof LensBlurOutlined> = {
  component: LensBlurOutlined,
  tags: ['autodocs'],
  title: 'device/LensBlurOutlined',
};

export default meta;
type Story = StoryObj<typeof LensBlurOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
