import type { Meta, StoryObj } from '@storybook/react';

import ClosedCaptionDisabledOutlined from '../../lib/av/ClosedCaptionDisabledOutlined';

const meta: Meta<typeof ClosedCaptionDisabledOutlined> = {
  component: ClosedCaptionDisabledOutlined,
  tags: ['autodocs'],
  title: 'av/ClosedCaptionDisabledOutlined',
};

export default meta;
type Story = StoryObj<typeof ClosedCaptionDisabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
