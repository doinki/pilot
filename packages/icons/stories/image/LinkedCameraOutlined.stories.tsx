import type { Meta, StoryObj } from '@storybook/react';

import LinkedCameraOutlined from '../../lib/image/LinkedCameraOutlined';

const meta: Meta<typeof LinkedCameraOutlined> = {
  component: LinkedCameraOutlined,
  tags: ['autodocs'],
  title: 'image/LinkedCameraOutlined',
};

export default meta;
type Story = StoryObj<typeof LinkedCameraOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
