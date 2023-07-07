import type { Meta, StoryObj } from '@storybook/react';

import PanoramaVerticalSelectOutlined from '../../lib/image/PanoramaVerticalSelectOutlined';

const meta: Meta<typeof PanoramaVerticalSelectOutlined> = {
  component: PanoramaVerticalSelectOutlined,
  tags: ['autodocs'],
  title: 'image/PanoramaVerticalSelectOutlined',
};

export default meta;
type Story = StoryObj<typeof PanoramaVerticalSelectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
