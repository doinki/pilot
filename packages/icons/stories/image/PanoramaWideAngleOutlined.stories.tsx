import type { Meta, StoryObj } from '@storybook/react';

import PanoramaWideAngleOutlined from '../../lib/image/PanoramaWideAngleOutlined';

const meta: Meta<typeof PanoramaWideAngleOutlined> = {
  component: PanoramaWideAngleOutlined,
  tags: ['autodocs'],
  title: 'image/PanoramaWideAngleOutlined',
};

export default meta;
type Story = StoryObj<typeof PanoramaWideAngleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
