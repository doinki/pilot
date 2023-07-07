import type { Meta, StoryObj } from '@storybook/react';

import ExposureZeroOutlined from '../../lib/image/ExposureZeroOutlined';

const meta: Meta<typeof ExposureZeroOutlined> = {
  component: ExposureZeroOutlined,
  tags: ['autodocs'],
  title: 'image/ExposureZeroOutlined',
};

export default meta;
type Story = StoryObj<typeof ExposureZeroOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
