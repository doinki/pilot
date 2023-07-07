import type { Meta, StoryObj } from '@storybook/react';

import ExposureOutlined from '../../lib/image/ExposureOutlined';

const meta: Meta<typeof ExposureOutlined> = {
  component: ExposureOutlined,
  tags: ['autodocs'],
  title: 'image/ExposureOutlined',
};

export default meta;
type Story = StoryObj<typeof ExposureOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
