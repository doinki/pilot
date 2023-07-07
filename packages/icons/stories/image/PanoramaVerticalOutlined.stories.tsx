import type { Meta, StoryObj } from '@storybook/react';

import PanoramaVerticalOutlined from '../../lib/image/PanoramaVerticalOutlined';

const meta: Meta<typeof PanoramaVerticalOutlined> = {
  component: PanoramaVerticalOutlined,
  tags: ['autodocs'],
  title: 'image/PanoramaVerticalOutlined',
};

export default meta;
type Story = StoryObj<typeof PanoramaVerticalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
