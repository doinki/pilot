import type { Meta, StoryObj } from '@storybook/react';

import PanoramaWideAngleSelectOutlined from '../../lib/image/PanoramaWideAngleSelectOutlined';

const meta: Meta<typeof PanoramaWideAngleSelectOutlined> = {
  component: PanoramaWideAngleSelectOutlined,
  tags: ['autodocs'],
  title: 'image/PanoramaWideAngleSelectOutlined',
};

export default meta;
type Story = StoryObj<typeof PanoramaWideAngleSelectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
